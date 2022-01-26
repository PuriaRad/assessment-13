import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { EButtonComponent } from './e-button.component';

@NgModule({
  declarations: [EButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [EButtonComponent],
})
export class EButtonModule {}
