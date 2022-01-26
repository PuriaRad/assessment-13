import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsGridComponent } from './products-grid.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProductsGridComponent, ProductCardComponent],
  imports: [CommonModule, MatProgressSpinnerModule, MatRippleModule, MatButtonModule],
  exports: [ProductsGridComponent],
})
export class ProductsGridModule {}
