import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatBadgeModule, MatProgressSpinnerModule],
  exports: [CartComponent],
})
export class CartModule {}
