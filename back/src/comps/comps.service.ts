import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comp } from './comp.model';
import { Model } from 'mongoose';
import { CreateCompDto } from './dto/create-comp.dto';
import { UpdateCompDto } from './dto/update-comp.dto';

@Injectable()
export class CompsService {

    constructor(@InjectModel(Comp.name) private compModel: Model<Comp>) {}

    async createComp(dto: CreateCompDto){
        const camp = await this.compModel.create(dto)
        return camp
    }
    async getAllCamps(){
        const camps = await this.compModel.find()
        return camps
    }
    async getAllBots(){
        const camps = await this.compModel.find({}, {_id: 0, bot: 1})
        return camps.filter(item => item.bot !== 'empty' && item.bot !== 'dell').map(item => item.bot)
    }
    async getMyCamps(email: any){
        const camps = await this.compModel.find({owner: email})
        return camps
    }
    async getCampsForManagerByEmail(email: any){
        const camps = {}
        const res = await this.compModel.find({owner: email}, {bot: 0})
        if(res.length){
            camps['owner'] = res
        }
        for(let i of ['managers', 'supermanagers', 'masters']){
            const res = await this.compModel.find({[i]: { $elemMatch: {'email': email}}}, {bot: 0})
            if(res.length) camps[i] = res
        }
        return camps
    }
    async deleteComp(id: any){
        await this.compModel.deleteOne({_id: id})
    }
    async updateComp(id: any, dto: UpdateCompDto){
        await this.compModel.updateOne({_id: id}, dto)
    }
    async getCampFix(campId: any){
        const fix = (await this.compModel.findOne({_id: campId}, {_id: 0, lists: 1})).lists
        return fix
    }
    async getCamp(campId: any){
        const camp = await this.compModel.findOne({_id: campId})
        camp.bot = '******************'
        return camp
    }
    async dellBotToken(token: any){
        await this.compModel.updateMany({bot: token}, {bot: 'empty'})
    }   
}
