/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('inventory-settings')
export class InventorySettingsController {
    constructor(private readonly store: StoreService) { }

    @Get('list')
    getList(): Promise<string[]> {
        return this.store.readInventorySettings();
    }
    @Post('save')
    async saveSettings(@Body() setting: any): Promise<boolean> {
        const settings = await this.store.readInventorySettings();
        settings.push(setting)
        return this.store.writeApplicationStore(settings);
    }
}
