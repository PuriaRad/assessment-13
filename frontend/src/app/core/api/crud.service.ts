import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpService) {}

  public create<Type>(url: string, body: Type) {
    return this.http.requestCreator('post', url, { body });
  }

  public update<Type>(url: string, id: number, body: Type) {
    return this.http.requestCreator('put', url, { param: id, body });
  }

  public delete(url: string, id: number) {
    return this.http.requestCreator('delete', url, { param: id });
  }

  public getAll<Type>(
    url: string,
    options?:
      | HttpParams
      | {
          [param: string]: string | string[];
        }
  ): Observable<Type[]> {
    return this.http.requestCreator('get', url, {
      params: options,
    });
  }

  public getOne<Type>(
    url: string,
    id: number,
    options?:
      | HttpParams
      | {
          [param: string]: string | string[];
        }
  ): Observable<Type> {
    return this.http.requestCreator('get', url, {
      param: id,
      params: options,
    });
  }
}
