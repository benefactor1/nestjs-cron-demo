import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class MicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }

  @Cron('* * * * * *')
  everySecond(): void {
    console.log('start cron in microservice every second');
  }
}
