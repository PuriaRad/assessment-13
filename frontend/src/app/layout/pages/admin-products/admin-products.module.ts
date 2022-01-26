import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { EButtonModule } from 'src/app/elements/e-button/e-button.module';

import { AdminProductsRoutingModule } from './admin-products-routing.module';
import { AdminProductsComponent } from './admin-products.component';

@NgModule({
  declarations: [AdminProductsComponent],
  imports: [
    CommonModule,
    AdminProductsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    EButtonModule,
    MatButtonModule,
  ],
})
export class AdminProductsModule {}
