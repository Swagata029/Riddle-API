import { Module } from '@nestjs/common';
import { RiddleController } from './riddle.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [RiddleController],
})
export class RiddleModule {}
