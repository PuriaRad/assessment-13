import {
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';

export interface ApiOptions {
  body?: any;
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  param?: any;
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  responseType?: 'json' | 'blob';
  reportProgress?: boolean;
  withCredentials?: boolean;
}
