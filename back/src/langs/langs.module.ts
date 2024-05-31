import { Module } from '@nestjs/common';
import { LangsController } from './langs.controller';

@Module({
    controllers: [LangsController]
})
export class LangsModule {}
