import { Module } from '@nestjs/common';
import { PogremuhiController } from './pogremuhi.controller';

@Module({
  controllers: [PogremuhiController]
})
export class PogremuhiModule {}
