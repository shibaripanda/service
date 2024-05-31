import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({

  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
  
})

export class UsersModule {}
