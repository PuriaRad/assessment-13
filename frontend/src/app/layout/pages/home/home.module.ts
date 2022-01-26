import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { CartModule } from 'src/app/global/cart/cart.module';
import { ProductsGridModule } from 'src/app/global/products-grid/products-grid.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, CartModule, ProductsGridModule, MatIconModule, FormsModule],
})
export class HomeModule {}
