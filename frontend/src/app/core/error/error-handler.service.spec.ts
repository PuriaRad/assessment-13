import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ErrorHandlerService } from './error-handler.service';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule] });
    service = TestBed.inject(ErrorHandlerService);
    spyOn(service, 'handleError');
    spyOn(service, 'errorAlert');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('handlerError', () => {
    it('should handle an error', () => {
      const error: Error = new Error('ERROR');
      service.handleError(error);

      expect(service.handleError).toHaveBeenCalledWith(error);
    });

    it('should handle an ErrorEvent', ()=>{
       const error: ErrorEvent = new ErrorEvent('ERROR');
       service.handleError(error);

       expect(service.handleError).toHaveBeenCalledWith(error);
    })
  });
});
