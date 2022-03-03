/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import * as _ from 'lodash';
import { StoreService } from './store.service';
import { v4 as uuidv4 } from 'uuid';

@Controller('inventory-settings')
export class InventorySettingsController {
    constructor(private readonly store: StoreService) { }

    @Get('get-list/:id')
    async getFullList(@Param() params): Promise<string[]> {
        const fullList = await this.store.readInventorySettingsList();
        return fullList[params.id];
    }
    @Get('get/:id')
    async getOne(@Param() params): Promise<string[]> {
        const fullList = await this.store.readInventorySettings();
        console.log(fullList)
        return _.find(fullList, { id: params.id }) ?? {};
    }
    @Get('list')
    getList(): Promise<string[]> {
        return this.store.readInventorySettings();
    }
    @Post('save')
    async saveSettings(@Body() setting: any): Promise<boolean> {
        const settings = await this.store.readInventorySettings();
        setting.id = uuidv4();
        settings.push(setting)
        return this.store.writeApplicationStore(settings);
    }
}
