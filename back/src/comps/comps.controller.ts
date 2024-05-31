import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CompsService } from './comps.service';
import { CreateCompDto } from './dto/create-comp.dto';
import { UpdateCompDto } from './dto/update-comp.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('/api/camps')
export class CompsController {

    constructor(private compsService: CompsService,
                private jwtService: JwtService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() compDto: CreateCompDto){
        return this.compsService.createComp(compDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAllCamps(){
        return this.compsService.getAllCamps()
    }

    @UseGuards(JwtAuthGuard)
    @Get('email/:email')
    getCampsForManagerByEmail(@Param('email') email: string){
        return this.compsService.getCampsForManagerByEmail(email)
    }

    @UseGuards(JwtAuthGuard)
    @Get('fix/:campId')
    getCampFix(@Param('campId') campId: string){
        return this.compsService.getCampFix(campId)
    }

    @UseGuards(JwtAuthGuard)
    @Get(':campId')
    getCamp(@Param('campId') campId: string){
        return this.compsService.getCamp(campId)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    delOne(@Param('id') id: string){
        return this.compsService.deleteComp(id)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateComp(@Param('id') id: string,
           @Body() updateCompDto: UpdateCompDto){
        return this.compsService.updateComp(id, updateCompDto)
    }

}
