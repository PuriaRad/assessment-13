import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductCardComponent } from './components/product-card/product-card.component';

import { ProductsGridComponent } from './products-grid.component';

describe('ProductsGridComponent', () => {
  let component: ProductsGridComponent;
  let fixture: ComponentFixture<ProductsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsGridComponent, ProductCardComponent],
      imports: [
        MatProgressSpinnerModule,
        MatRippleModule,
        MatButtonModule,
        HttpClientModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
