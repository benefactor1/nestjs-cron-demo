import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {
  CRON_DEMO_PACKAGE_NAME,
  CRON_DEMO_SERVICE_NAME,
} from 'apps/libs/contract/cron-demo';
import { HybridModule } from './hybrid.module';

const host = '127.0.0.1';
const port = 3001;
const loaderConfig = { arrays: true };

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(HybridModule);

  const cronDemoMS = app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.GRPC,
      options: {
        url: `${host}:${port}`,
        package: CRON_DEMO_PACKAGE_NAME,
        protoPath: 'apps/libs/proto/cron-demo.proto',
        loader: loaderConfig,
      },
    },
    { inheritAppConfig: true },
  );

  await cronDemoMS.listen();

  console.log('Connect to cron demo microservice');
}
bootstrap();
