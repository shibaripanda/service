import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { sendEmail } from 'src/modules/sendMail';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(dto: CreateUserDto){
        const user = await this.userModel.create(dto)
        return user
    }

    async getAllUsers(){
        const users = await this.userModel.find()
        return users
    }

    async getUserByEmail(email: string){
        const user = await this.userModel.findOne({email: email})
        return user
    }

    async updateUser(id: any, dto){
        await this.userModel.updateOne({_id: id}, dto)
    }
    
}
