import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import {
  lastValueFrom,
  Observable,
} from 'rxjs';

import { User } from '../classes/user';
import { UserApiService } from '../core/api/custom/user-api.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  users$!: Observable<User[]>;
  isLoadingResults = true;

  public displayedColumns = ['id', 'avatar', 'fullName', 'country', 'city', 'email', 'role', 'login'];
  public dataSource = new _MatTableDataSource<User>();
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatSort, { static: false }) set sort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  @ViewChild(MatPaginator, { static: false }) set paginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  constructor(private userService: UserService, private userAPI: UserApiService, private router: Router) {}

  ngOnInit(): void {}

  async ngAfterViewInit() {
    this.userAPI.getAllUsers().pipe((users) => (this.users$ = users));
    this.dataSource.data = await lastValueFrom(this.users$);
    this.dataSource.sortingDataAccessor = (item: any, property) => {
      switch (property) {
        case 'country':
          return item.address.country;
        case 'fullName':
          return item.fullName;
        case 'city':
          return item.address.city;
        default:
          return item[property];
      }
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loginAs(user: User) {
    this.userService.loginWithUser(user);
    if (user.role == 'ADMIN') {
      this.router.navigate(['/admin-products']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
