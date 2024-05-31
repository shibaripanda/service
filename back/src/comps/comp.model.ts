import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

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

  @Prop()
  namecomp: string;

  @Prop()
  campinfo: string;

  @Prop({default: 'empty'})
  bot: string;

  @Prop({ type: Object, default: {start: 'time'}})
  docprint: object;

  @Prop({ type: Object, default: {main: 'rgb(1, 75, 235)', order: 'rgb(1, 75, 235)', ready: 'rgb(1, 75, 235)', close: 'rgb(1, 75, 235)'}})
  colorsettings: object;

  @Prop({ type: Array })
  lists: object

}

export const CompSchema = SchemaFactory.createForClass(Comp);