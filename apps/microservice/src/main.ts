import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CRON_DEMO_PACKAGE_NAME } from 'apps/libs/contract/cron-demo';
import { MicroserviceModule } from './microservice.module';

const host = '127.0.0.1';
const port = 3002;
const loaderConfig = { arrays: true };

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(MicroserviceModule, {
    transport: Transport.GRPC,
    options: {
      url: `${host}:${port}`,
      package: CRON_DEMO_PACKAGE_NAME,
      protoPath: 'apps/libs/proto/cron-demo.proto',
      loader: loaderConfig,
    },
  });
  await app.listen();
}
bootstrap();
