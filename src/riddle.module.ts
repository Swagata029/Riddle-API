import { Module } from '@nestjs/common';
import { AppController } from './riddle.controller';

@Module({
  imports: [],
  controllers: [AppController],
})
export class AppModule {}
