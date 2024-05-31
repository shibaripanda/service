import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/api/users')
export class UsersController {

    constructor(private usersService: UsersService){}
    
    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAll(){
        return this.usersService.getAllUsers()
    }

    // @UseGuards(JwtAuthGuard)
    // @Get()
    // getBotConnect(){
    //     return this.usersService.getBotConnect()
    // }
}
