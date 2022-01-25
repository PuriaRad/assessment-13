import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/classes/user';

import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = new BehaviorSubject<User | null>(null);

  constructor(private storage: StorageService) {
    this.autoLogin();
  }

  autoLogin() {
    const user = this.storage.getStorage('user');
    if (user) {
      this.user.next(
        new User(user.id, user.name, user.phone, user.avatar, user.email, user.address, user.role)
      );
    }
  }

  loginWithUser(user: User): void {
    this.user.next(user);
    this.storage.setStorage('user', user);
  }

  logout() {
    this.user.next(null);
    this.storage.setStorage('user', null);
  }
}
