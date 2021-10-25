import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MonoliteController } from './monolite.controller';
import { MonoliteService } from './monolite.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [MonoliteController],
  providers: [MonoliteService],
})
export class MonoliteModule {}
