import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class CacheService extends StorageService {
  constructor() {
    super();
  }

  public getCache(key: string) {
    const data = this.getStorage(key, true);
    if (!data || !data.timestamp || new Date() > new Date(data.timestamp)) {
      return null;
    } else {
      return data.value;
    }
  }

  public setCache(key: string, value: any) {
    const today = new Date();
    today.setHours(today.getHours() + 1);
    this.setStorage(key, { value, timestamp: today }, true);
  }
}
