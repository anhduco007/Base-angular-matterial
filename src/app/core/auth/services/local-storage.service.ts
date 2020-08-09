import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    constructor() { }

    set(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch {
            console.log('Error saving to localStorage');
        }
    }

    get(key: string) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch {
            console.error('Error getting data from localStorage');
            return null;
        }
    }

    get token() {
        return this.get('token');
    }
}
