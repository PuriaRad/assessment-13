import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ErrorHandlerService } from '../error/error-handler.service';
import { ApiOptions } from './api-options.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

  public requestCreator(
    method = 'get',
    url: string,
    options: ApiOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
    }
  ): Observable<any> {
    if (options && !options.headers)
      options['headers'] = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      });

    if (options && (options.param == undefined || options.param == null)) {
      options.param = '';
    }

    return this.http
      .request(method, `${environment.backendAPI + url}${options.param}`, {
        body: options.body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        responseType: options.responseType,
        reportProgress: options.reportProgress,
        withCredentials: options.withCredentials,
      })
      .pipe(shareReplay(1));
  }
}
