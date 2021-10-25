import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class MonoliteService {
  getHello(): string {
    return 'Hello World!';
  }
  
  @Cron('* * * * * *')
  everySecond(): void {
    console.log('start cron in monolite every seconds');
  }
}
