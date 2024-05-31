import { Module, forwardRef } from '@nestjs/common';
import { CompsService } from './comps.service';
import { CompsController } from './comps.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comp, CompSchema } from './comp.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({

  imports: [MongooseModule.forFeature([{ name: Comp.name, schema: CompSchema }]), forwardRef(() => AuthModule)],
  providers: [CompsService],
  controllers: [CompsController],
  exports: [CompsService]

})

export class CompsModule {}
