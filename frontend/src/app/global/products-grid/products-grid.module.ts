import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsGridComponent } from './products-grid.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [ProductsGridComponent, ProductCardComponent],
  imports: [CommonModule],
  exports: [ProductsGridComponent],
})
export class ProductsGridModule {}
