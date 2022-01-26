import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CrudService } from '../crud.service';
import { ProductApiService } from './product-api.service';

describe('ProductApiService', () => {
  let service: ProductApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CrudService] , imports:[HttpClientModule, RouterTestingModule]});
    service = TestBed.inject(ProductApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
