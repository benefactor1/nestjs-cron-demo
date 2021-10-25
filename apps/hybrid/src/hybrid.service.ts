import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class HybridService {
  getHello(): string {
    return 'Hello World!';
  }

  @Cron('* * * * * *')
  everySecond(): void {
    console.log('start cron in hybrid ms every seconds');
  }
}
