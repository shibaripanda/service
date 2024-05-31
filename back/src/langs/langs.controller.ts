import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('/api/leng')
export class LangsController {

    @Get()
    get(){
         return global.lengPack
    }

}
