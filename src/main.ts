import { NestFactory } from '@nestjs/core';
import { RiddleModule } from './riddle.module';

async function bootstrap() {
  const app = await NestFactory.create(RiddleModule);
  const port = process.env.PORT || 3000;
  app.enableCors();
  await app.listen(port);
  console.log(`Server running on https://localhost:${port}`);
}
bootstrap();
