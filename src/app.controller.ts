import { Controller, Get } from '@nestjs/common';

import { StoreService } from './store.service';

@Controller()
export class AppController {
  constructor(private readonly store: StoreService) { }

  @Get()
  getHello(): string {
    return this.store.readInventorySettings();
  }
}
