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

  handleError(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.errorAlert(errorMessage);
    throw error;
  }

  errorAlert(errorMessage: string) {
    swal.fire({
      title: 'Error',
      text: errorMessage,
      confirmButtonText: 'Ok',
      showDenyButton: false,
      customClass: {
        confirmButton: 'btn btn-success',
      },
    });
  }
}
