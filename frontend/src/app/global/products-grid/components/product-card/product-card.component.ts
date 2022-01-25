import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  quantity = 1;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  plus() {
    this.quantity = this.quantity + 1;
  }

  minus() {
    this.quantity = this.quantity > 1 ? this.quantity - 1 : 1;
  }

  addToCart() {
    this.cartService.addProduct(this.product, this.quantity);
  }
}
