import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/app/classes/cart';
import { ICart } from 'src/app/classes/icart.interface';
import { Product } from 'src/app/classes/product';
import { User } from 'src/app/classes/user';

import { CartApiService } from '../api/custom/cart-api.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<Cart | null>(null);
  constructor(private cartApi: CartApiService) {}

  addProduct(product: Product, quantity: number): void {
    if (this.cart.getValue() !== null) {
      const currentValue: Cart = this.cart.getValue() as Cart;

      // check if product is already in the list. If it is, just add the quantity, if not, push new prod to cart
      const duplicateIndex = currentValue.productOrders.findIndex((prod) => prod.product.id === product.id);
      if (duplicateIndex != -1) {
        currentValue.productOrders[duplicateIndex].quantity =
          currentValue.productOrders[duplicateIndex].quantity + quantity;
      } else {
        currentValue.productOrders.push({ product, quantity });
      }

      const sendingCart: ICart = {
        id: currentValue.id,
        products: currentValue.productOrders.map((productOrder) => {
          return {
            id: productOrder.product.id,
            quantity: productOrder.quantity,
          };
        }),
      };
      this.cartApi.update(sendingCart).subscribe(() => {});
      this.cart.next(currentValue);
    }
  }

  // Maybe in the future :D
  // removeProduct() {

  // }
}
