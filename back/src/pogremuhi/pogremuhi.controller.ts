import { Controller, Get } from '@nestjs/common';

@Controller('/api/pogremuhi')
export class PogremuhiController {

    @Get()
    get(){
         return global.pricePogremuhi
    }

}
