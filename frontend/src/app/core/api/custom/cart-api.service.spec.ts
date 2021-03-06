import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CrudService } from '../crud.service';
import { CartApiService } from './cart-api.service';
import { ProductApiService } from './product-api.service';

describe('CartApiService', () => {
  let service: CartApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [CrudService, ProductApiService],
    });
    service = TestBed.inject(CartApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
