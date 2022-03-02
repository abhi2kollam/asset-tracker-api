import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventorySettingsController } from './inventory-settings.controller';
import { StoreService } from './store.service';

@Module({
  imports: [],
  controllers: [AppController, InventorySettingsController],
  providers: [AppService, StoreService],
})
export class AppModule { }
