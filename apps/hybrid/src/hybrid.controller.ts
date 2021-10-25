import { Controller, Get } from '@nestjs/common';
import { HybridService } from './hybrid.service';

@Controller()
export class HybridController {
  constructor(private readonly hybridService: HybridService) {}

  @Get()
  getHello(): string {
    return this.hybridService.getHello();
  }
}
