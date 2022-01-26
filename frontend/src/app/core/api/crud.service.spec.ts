import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';
import { HttpService } from './http.service';

describe('CrudService', () => {
  let service: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HttpService] });
    service = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
