/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';

@Injectable()
export class StoreService {

    #STORE_PATH = `${process.cwd()}\\src\\assets\\`;
    #INVENTORY_SETTINGS_PATH = this.#STORE_PATH + 'inventory-settings.json';

    readInventorySettings() {
        return this._readDataFromFile(this.#INVENTORY_SETTINGS_PATH);
    }

    writeApplicationStore(data): boolean {
        return this._writeDataToFile(this.#INVENTORY_SETTINGS_PATH, data);
    }

    _readDataFromFile(path) {
        try {
            return JSON.parse(readFileSync(path, 'utf8'));
        } catch (error) {
            return {}
        }
    }

    _writeDataToFile(path, data): boolean {
        data = JSON.stringify(data);
        try {
            writeFileSync(path, data);
            return true;
        } catch (error) {
            return false;
        }
    }
}
