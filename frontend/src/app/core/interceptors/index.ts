import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerInterceptor } from './logger.interceptor';
import { SpinnerInterceptor } from './spinner.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
];
