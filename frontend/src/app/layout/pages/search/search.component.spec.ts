import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProductApiService } from 'src/app/core/api/custom/product-api.service';
import { CartModule } from 'src/app/global/cart/cart.module';
import { ProductsGridModule } from 'src/app/global/products-grid/products-grid.module';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [CartModule, ProductsGridModule, MatIconModule, FormsModule, HttpClientModule, RouterTestingModule],
      providers: [ProductApiService, { provide: ActivatedRoute, useValue: { queryParams: of({ keywords: 'keywords' }) } }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
