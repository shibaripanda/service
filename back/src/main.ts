import 'dotenv/config'
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { textObject } from './modules/textObject'
import { getFilePrice } from './modules/pogremuhiModule/getFilePrice'

async function start(){
    try{
        const PORT = process.env.PORT || 7000
        global.lengPack = textObject('./src/languages/')
        global.pricePogremuhi = []
        
        const app = await NestFactory.create(AppModule)

        getFilePrice('http://www.pogremuhi.com/pricelist/', './files/price.xls', 25, 'Price Pogremuhi ', 'Price')
        setInterval(() => getFilePrice('http://www.pogremuhi.com/pricelist/', './files/price.xls', 25, 'Price Pogremuhi ', 'Price'), 3600000)
        
        app.enableCors({
            "origin": "*",
            "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
            "preflightContinue": false,
            "optionsSuccessStatus": 204
        })
        await app.listen(PORT, () => {console.log(`Server started on port = ${PORT}`)})
    }
    catch(e){
        console.log('Main:\n' + e)
    }
}


start()