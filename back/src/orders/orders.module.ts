import { Module, forwardRef } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './order.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({

  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]), forwardRef(() => AuthModule)],
  controllers: [OrdersController],
  providers: [OrdersService]
  
})

export class OrdersModule {}
