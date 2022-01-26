import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

import { NgxCurrencyModule } from 'ngx-currency';

import { EInputComponent } from './e-input.component';

@NgModule({
  declarations: [EInputComponent],
  imports: [CommonModule, MatRippleModule, MatButtonModule, ReactiveFormsModule, NgxCurrencyModule],
  exports: [EInputComponent],
})
export class EInputModule {}
