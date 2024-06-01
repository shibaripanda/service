import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { fix } from '../fix'

export type CompDocument = HydratedDocument<Comp>;

@Schema()
export class Comp {

  _id: mongoose.Types.ObjectId;

  @Prop({required: true})
  owner: string;

  @Prop({default: []})
  managers: Array<object>;

  @Prop({default: []})
  supermanagers: Array<object>;

  @Prop({default: []})
  masters: Array<object>;

  @Prop({default: fix.defaultStatusesOfOrders})
  statusesOfOrders: Array<object>;

  @Prop()
  namecomp: string;

  @Prop()
  campinfo: string;

  @Prop({default: 'empty'})
  bot: string;

  @Prop({ type: Object, default: {start: 'time'}})
  docprint: object;

  @Prop({ type: Object, default: fix.defaultColorsOfApp})
  colorsettings: object;

  @Prop({ type: Array })
  lists: object

}

export const CompSchema = SchemaFactory.createForClass(Comp);