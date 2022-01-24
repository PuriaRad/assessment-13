import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProductsRoutingModule } from './admin-products-routing.module';
import { AdminProductsComponent } from './admin-products.component';


@NgModule({
  declarations: [
    AdminProductsComponent
  ],
  imports: [
    CommonModule,
    AdminProductsRoutingModule
  ]
})
export class AdminProductsModule { }
