import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ImageGalleryComponent } from './image-gallery.component';

@NgModule({
  declarations: [ImageGalleryComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [ImageGalleryComponent],
})
export class ImageGalleryModule {}
