import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/classes/user';
import { CartApiService } from '../api/custom/cart-api.service';

import { StorageService } from '../storage/storage.service';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = new BehaviorSubject<User | null>(null);

  constructor(
    private storage: StorageService,
    private cartApi: CartApiService,
    private cartService: CartService
  ) {}

  async autoLogin() {
    const user = this.storage.getStorage('user');
    if (user) {
      this.user.next(
        new User(user._id, user.name, user.phone, user.avatar, user.email, user.address, user._role)
      );
    }
    await this.setCart();
  }

  async loginWithUser(user: User) {
    this.user.next(user);
    this.storage.setStorage('user', user);
    await this.setCart();
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('user');
    this.cartService.cart.next(null);
  }

  async setCart() {
    if (this.user.getValue()) {
      const user: User = this.user.getValue() as User;
      const cart = await this.cartApi.getCart(user.id);
      if (cart) {
        this.cartService.cart.next(cart);
      }
    } else {
      this.cartService.cart.next(null);
    }
  }
}
