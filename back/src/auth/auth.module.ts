import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { CompsService } from 'src/comps/comps.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Comp, CompSchema } from 'src/comps/comp.model';

@Module({
  controllers: [AuthController],
  providers: [AuthService, CompsService],
  imports: [forwardRef(() => UsersModule), JwtModule.register({
    secret: process.env.SECRET_KEY,
    signOptions: {
      expiresIn: '24h'
    }
  }), MongooseModule.forFeature([{ name: Comp.name, schema: CompSchema }])],
  exports: [AuthService, JwtModule]

})
export class AuthModule {}
