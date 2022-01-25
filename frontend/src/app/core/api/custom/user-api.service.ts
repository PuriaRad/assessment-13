import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';
import { User } from 'src/app/classes/user';

import { CrudService } from '../crud.service';

interface  IUser {
    id: number,
    name: {
        firstName: string,
        lastName: string,
    }
    phone: string,
    avatar: string,
    email: string,
    address: {
        country: string,
        city: string,
        zip: string,
        street: string,
    },
    orders: {
        id: number,
        products: {
            id: number,
            quantity: number,
        }[],
    },
    role: 'ADMIN' | 'CUSTOMER' // Role is based on i % 2
};

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private crud: CrudService) {}

  getAllUsers(): Observable<User[]> {
    return this.crud
      .getAll<IUser>('users')
      .pipe(
        map((users) =>
          users.map(
            (user) =>
              new User(user.id, user.name, user.phone, user.avatar, user.email, user.address, user.role)
          )
        )
      );
  }
}
