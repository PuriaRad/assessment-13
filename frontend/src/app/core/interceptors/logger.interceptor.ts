import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {
  finalize,
  tap,
} from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;
    let body: any;
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          ok = event instanceof HttpResponse ? 'succeeded' : '';
          body = event instanceof HttpResponse && event.body ? event.body : undefined;
        },
        (error: HttpErrorResponse) => (ok = 'failed')
      ),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed = Date.now() - started;
        if (ok == 'succeeded') {
          console.log(
            '%c⧭ ' + ok + ' ' + request.method,
            'color: green; font-size: 1rem; font-weight: bold;',
            {
              payload: request.body,
              response: body,
            },
            `"${request.urlWithParams}" ${ok} in ${elapsed} ms.`
          );
        } else {
          console.log(
            '%c⧭ ' + ok + ' ' + request.method,
            'color: red; font-size: 1rem; font-weight: bold;',
            {
              payload: request.body,
              response: body,
            },
            `"${request.urlWithParams}" ${ok} in ${elapsed} ms.`
          );
        }
      })
    );
  }
}
