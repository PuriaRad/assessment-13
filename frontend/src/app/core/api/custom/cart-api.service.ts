import { Injectable } from '@angular/core';

import {
  lastValueFrom,
  Observable,
} from 'rxjs';
import { Cart } from 'src/app/classes/cart';
import { Product } from 'src/app/classes/product';

import { CrudService } from '../crud.service';
import { ProductApiService } from './product-api.service';

interface ICart {
  id: number; // User id
  products: {
    id: number;
    quantity: number;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class CartApiService {
  constructor(private crud: CrudService, private productAPI: ProductApiService) {}

  private getCartByUserIdAPI(userId: number): Observable<ICart> {
    return this.crud.getOne<ICart>('carts/', userId);
  }

  async getCart(userId: number): Promise<Cart> {
    const iCart = await lastValueFrom(this.getCartByUserIdAPI(userId));
    const productOrders: { product: Product; quantity: number }[] = await this.CreateProductOrders(iCart);

    return new Cart(iCart.id, productOrders);
  }

  private async CreateProductOrders(iCart: ICart) {
    return Promise.all(
      iCart.products.map(async (iProduct) => {
        const product = await lastValueFrom(this.productAPI.getProduct(iProduct.id));
        return {
          product,
          quantity: iProduct.quantity,
        };
      })
    );
  }

  // No webservice to update cart!
  // setCart()
}
