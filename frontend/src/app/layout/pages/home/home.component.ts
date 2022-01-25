import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from 'src/app/classes/product';
import { ProductApiService } from 'src/app/core/api/custom/product-api.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recoms$!: Observable<Product[]>;
  constructor(private productApi: ProductApiService, private cartService: CartService) {}

  async ngOnInit() {
    this.productApi.getRecommended().pipe((recoms) => (this.recoms$ = recoms));
    await this.cartService.setCart();
  }

  search(event: Event) {}
}
