import { TestBed } from '@angular/core/testing';

import { CartApiService } from './cart-api.service';

describe('CartApiService', () => {
  let service: CartApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
