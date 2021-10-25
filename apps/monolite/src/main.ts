import { NestFactory } from '@nestjs/core';
import { MonoliteModule } from './monolite.module';

async function bootstrap() {
  const app = await NestFactory.create(MonoliteModule);
  await app.listen(3000);
}
bootstrap();
