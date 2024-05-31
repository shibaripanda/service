import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  _id: mongoose.Types.ObjectId;

  @Prop({required: true, unique: true})
  email: string;

  @Prop({required: true})
  password: string;

  @Prop({default: false})
  banned: boolean;

  @Prop({default: 'user'})
  role: string;

  @Prop({type: Object})
  emailAuthCode: object

  @Prop({default: false, type: Boolean})
  statusAuthEmail: boolean;

}

export const UserSchema = SchemaFactory.createForClass(User);