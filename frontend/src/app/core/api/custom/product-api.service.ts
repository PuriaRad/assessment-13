import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';
import { Product } from 'src/app/classes/product';

import { CrudService } from '../crud.service';

interface IProduct {
  id: number;
  name: string;
  description: string;
  defaultImage: string;
  images: string[];
  price: number;
  discount: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private crud: CrudService) {}

  getProducts(pageIndex?: number, pageSize?: number, query?: string): Observable<Product[]> {
    let options: any = {};
    if (pageIndex) {
      options['_page'] = pageIndex + 1; // because it starts from 0
    }
    if (pageSize) {
      options['_limit'] = pageSize;
    }
    if (query) {
      options['q'] = query;
    }
    return this.crud
      .getAll<Product>('products', options)
      .pipe(
        map((products) =>
          products.map(
            (product) =>
              new Product(
                product.id,
                product.name,
                product.description,
                product.defaultImage,
                product.images,
                product.price,
                product.discount
              )
          )
        )
      );
  }

  getRecommended(): Observable<Product[]> {
    return this.crud.getAll<Product>('recommendeds').pipe(
      map((products) => products.slice(0, 9)),
      map((products) =>
        products.map(
          (product) =>
            new Product(
              product.id,
              product.name,
              product.description,
              product.defaultImage,
              product.images,
              product.price,
              product.discount
            )
        )
      )
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.crud
      .getOne<IProduct>('products/', id)
      .pipe(
        map(
          (product) =>
            new Product(
              product.id,
              product.name,
              product.description,
              product.defaultImage,
              product.images,
              product.price,
              product.discount
            )
        )
      );
  }

  create(product: Product): Observable<void> {
    return this.crud.create<IProduct>('products', product);
  }

  update(product: Product): Observable<void> {
    return this.crud.update<IProduct>('products', product.id, product);
  }

  delete(id: number): Observable<void> {
    return this.crud.delete('products', id);
  }
}
