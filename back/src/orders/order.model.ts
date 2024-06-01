import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  _id: mongoose.Types.ObjectId;
    
  @Prop({required: true})
  manager: string;

  @Prop({required: false})
  master: string;

  @Prop({required: true})
  title: string;

  @Prop({required: true})
  model: string;

  @Prop({required: true})
  sn: string;

  @Prop({required: true})
  problem: string;

  @Prop({required: true})
  name: string;

  @Prop({required: true})
  addres: string;

  @Prop({required: true})
  id: string;

  @Prop({required: true})
  date: number;

  @Prop({required: true})
  clientTel: string;

  @Prop({required: true})
  cost: string;

  @Prop({ type: Array, default: [] })
  historylist: object;

  @Prop({required: true})
  order: string;

  @Prop({required: true})
  view: string;

  @Prop({required: true})
  complect: string;

  @Prop({required: true})
  speed: string;

  @Prop({required: true})
  campId: string;

  @Prop({ type: Array, default: [] })
  service: object

  @Prop({required: false})
  status: string;

}

export const OrderSchema = SchemaFactory.createForClass(Order);

