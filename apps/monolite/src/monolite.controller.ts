import { Controller, Get } from '@nestjs/common';
import { MonoliteService } from './monolite.service';

@Controller()
export class MonoliteController {
  constructor(private readonly monoliteService: MonoliteService) {}

  @Get()
  getHello(): string {
    return this.monoliteService.getHello();
  }
}
