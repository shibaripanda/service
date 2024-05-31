import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { OrdersModule } from "./orders/orders.module";
import { LangsModule } from './langs/langs.module';
import { PogremuhiModule } from './pogremuhi/pogremuhi.module';
import { AuthModule } from './auth/auth.module';
import { CompsModule } from './comps/comps.module';
import { AppService } from './app/app.service';

@Module({
    controllers: [],
    providers: [AppService],
    imports: [
        MongooseModule.forRoot(process.env.MONGO_TOKEN), 
        UsersModule, 
        OrdersModule, 
        LangsModule, 
        PogremuhiModule, 
        AuthModule, 
        CompsModule
    ]
})

export class AppModule {}