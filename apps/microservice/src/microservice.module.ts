import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MicroserviceController } from './microservice.controller';
import { MicroserviceService } from './microservice.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [MicroserviceController],
  providers: [MicroserviceService],
})
export class MicroserviceModule {}
