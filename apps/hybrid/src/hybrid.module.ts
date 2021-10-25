import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { HybridController } from './hybrid.controller';
import { HybridService } from './hybrid.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [HybridController],
  providers: [HybridService],
})
export class HybridModule {}
