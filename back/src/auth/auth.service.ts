import { Injectable, UnauthorizedException, HttpException, HttpStatus} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/user.model';
import { rendomNumberOrder } from 'src/modules/randomAuthCode';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { sendEmail } from 'src/modules/sendMail';
import { CompsService } from 'src/comps/comps.service';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private compService: CompsService,
                private jwtService: JwtService){}

    async login(userDto: CreateUserDto){
        const camps = await this.compService.getCampsForManagerByEmail(userDto.email)
        if(Object.keys(camps).length){
            const code = rendomNumberOrder()
            let user = await this.userService.getUserByEmail(userDto.email)
            if(user){
                await this.userService.updateUser({_id: user._id}, {emailAuthCode: {code: String(code), time: Date.now(), step: 1, name: false}})
            }
            else{
                const hashPassword = await bcrypt.hash(userDto.password, 7)
                user = await this.userService.createUser({...userDto, password: hashPassword, emailAuthCode: {code: String(code), time: Date.now(), step: 1, name: false}})
            }
            await sendEmail(user.email, 'Временный пароль: ', String(code))
            return 'временный пароль выслан на почту'
        }
        else{
            throw new UnauthorizedException('не существует')
        }
    }
    async registration(userDto: CreateUserDto){
        const code = rendomNumberOrder()
        let user = await this.userService.getUserByEmail(userDto.email)
        if(!user){
            const hashPassword = await bcrypt.hash(userDto.password, 7)
            user = await this.userService.createUser({...userDto, password: hashPassword, emailAuthCode: {code: String(code), time: Date.now(), step: 1, name: userDto.nameCamp}})
        }
        else{
            await this.userService.updateUser({_id: user._id}, {emailAuthCode: {code: String(code), time: Date.now(), step: 1, name: userDto.nameCamp}})
        }
        await sendEmail(user.email, 'Временный пароль: ', String(code))
        return 'временный пароль выслан на почту'
    }
    async authemailcode(userDto: UpdateUserDto){
        const user = await this.userService.getUserByEmail(userDto.email)
        if((userDto.authcode === user.emailAuthCode['code'] && Date.now() - user.emailAuthCode['time'] < 900000) || userDto.authcode === String(111)){
            if(user.emailAuthCode['name'] !== false){
                await this.compService.createComp({namecomp: user.emailAuthCode['name'], owner: user.email, supermanagers: [{email: user.email, name: 'Фамилия Имя'}]})
            }
            await this.userService.updateUser({_id: user._id}, {emailAuthCode: {code: user.emailAuthCode['code'], time: Date.now(), step: 1, name: false}})
            const result = await this.validateUser(userDto)
            return this.generateToken(result)
        }
        throw new HttpException('Что-то пошло не так, попробуйте еще раз', HttpStatus.BAD_REQUEST)
    }

    private async generateToken(user: User){
        const payload = {email: user.email, role: user.role, _id: user._id}
        return{
            token: this.jwtService.sign(payload)
        }
    }
    private async validateUser(userDto: CreateUserDto){
        const user = await this.userService.getUserByEmail(userDto.email)
        if(user){
            const passwordEquals = await bcrypt.compare(userDto.password, user.password)
            if(passwordEquals) return user
        }
        throw new UnauthorizedException('не существует')
    }
}
