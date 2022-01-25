import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/app/classes/cart';
import { Product } from 'src/app/classes/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<Cart | null>(null);
  constructor() {}

  setCart(userId:number):void{
    //TODO Call api and get the cart. Then set it to this.cart
  }

  addProduct(product: Product, quantity: number):void {
    if (this.cart.getValue() !== null) {
      const currentValue: Cart = this.cart.getValue() as Cart;

      // check if product is already in the list. If it is, just add the quantity, if not, push new prod to cart
      const duplicateIndex = currentValue.productOrders.findIndex((prod) => prod.product.id === product.id);
      if (duplicateIndex) {
        currentValue.productOrders[duplicateIndex].quantity =
          currentValue.productOrders[duplicateIndex].quantity + quantity;
      } else {
        currentValue.productOrders.push({ product, quantity });
      }

      this.cart.next(currentValue);

      //TODO call the webservice and update the Cart
    }
  }

  // Maybe in the future :D
  // removeProduct() {

  // }
}
