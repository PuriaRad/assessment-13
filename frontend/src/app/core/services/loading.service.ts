import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService {
  isLoading = new BehaviorSubject<boolean>(true);

  constructor() {}

  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }
}
