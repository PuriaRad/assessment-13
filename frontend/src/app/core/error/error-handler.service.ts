import { HttpErrorResponse } from '@angular/common/http';
import {
  ErrorHandler,
  Injectable,
} from '@angular/core';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(public router: Router) {}

  handleError(error: any | HttpErrorResponse) {
    console.group('ErrorHandler');
    console.error(error.message);
    console.error(error.stack);
    console.error(window.location.href);
    console.groupEnd();

    if (error instanceof HttpErrorResponse) {
      this.handleHttpError(error);
    } else {
      this.errorAlert({
        errorStatus: 500,
        errorMessage: 'Unknown error!',
        errorError: error,
      });
    }

    throw error;
  }

  public handleHttpError(error: HttpErrorResponse) {
    console.group('ErrorHandler');
    console.error(error);
    console.error(window.location.href);
    console.groupEnd();
    let newError;

    if (error.error) {
      newError = {
        errorStatus: error.status,
        errorMessage: error.error.error,
        errorError: error,
      };
    } else {
      newError = {
        errorStatus: 500,
        errorMessage: 'Unknown error',
        errorError: error,
      };
    }
    this.errorAlert(newError);
  }

  errorAlert(errorMessage: any) {
    swal.fire({
      title: 'Error',
      text: errorMessage.errorMessage,
      confirmButtonText: 'Ok',
      showDenyButton: false,
      customClass: {
        confirmButton: 'btn btn-success',
      },
    });
  }
}
