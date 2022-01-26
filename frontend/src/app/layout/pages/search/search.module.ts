import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { CartModule } from 'src/app/global/cart/cart.module';
import { ProductsGridModule } from 'src/app/global/products-grid/products-grid.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule, CartModule, ProductsGridModule, MatIconModule, FormsModule],
})
export class SearchModule {}
