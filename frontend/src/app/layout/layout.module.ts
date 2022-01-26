import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './components/header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [CommonModule, LayoutRoutingModule, MatToolbarModule, MatIconModule, MatButtonModule],
})
export class LayoutModule {}
