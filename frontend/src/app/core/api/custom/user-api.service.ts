import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';
import { User } from 'src/app/classes/user';

import { CrudService } from '../crud.service';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private crud: CrudService) {}

  getAllUsers(): Observable<User[]> {
    return this.crud
      .getAll<User>('users')
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
