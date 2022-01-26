import { Injectable } from '@angular/core';

import { Base64 } from 'js-base64';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public getStorage(key: string, cache = false) {
    if (!cache) {
      // encrypt data if not cache
      if (localStorage.getItem(key)) {
        return JSON.parse(
          Base64.decode((localStorage.getItem(key) as string).split('').reverse().join(''))
            .split('')
            .reverse()
            .join('')
        );
      }
    } else {
      return JSON.parse(localStorage.getItem(key) as string);
    }
  }

  public setStorage(key: string, value: any, cache = false) {
    // decode when it is not cache
    if (!cache) {
      localStorage.setItem(
        key,
        Base64.encode(JSON.stringify(value).split('').reverse().join('')).split('').reverse().join('')
      );
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
}
