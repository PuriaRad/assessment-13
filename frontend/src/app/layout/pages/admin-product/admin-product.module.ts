import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { EButtonModule } from 'src/app/elements/e-button/e-button.module';
import { EInputModule } from 'src/app/elements/e-input/e-input.module';
import { ImageGalleryModule } from 'src/app/global/image-gallery/image-gallery.module';

import { AdminProductRoutingModule } from './admin-product-routing.module';
import { AdminProductComponent } from './admin-product.component';

@NgModule({
  declarations: [
    AdminProductComponent
  ],
  imports: [
    CommonModule,
    AdminProductRoutingModule,
    ReactiveFormsModule,
    EInputModule,
    ImageGalleryModule,
    EButtonModule
  ]
})
export class AdminProductModule { }
