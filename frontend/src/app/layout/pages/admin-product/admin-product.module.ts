import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProductRoutingModule } from './admin-product-routing.module';
import { AdminProductComponent } from './admin-product.component';


@NgModule({
  declarations: [
    AdminProductComponent
  ],
  imports: [
    CommonModule,
    AdminProductRoutingModule
  ]
})
export class AdminProductModule { }
