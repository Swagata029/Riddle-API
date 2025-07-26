import { Module } from '@nestjs/common';
import { RiddleController } from './riddle.controller';

@Module({
  imports: [],
  controllers: [RiddleController],
})
export class AppModule {}
