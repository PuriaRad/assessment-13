import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { LoadingService } from './core/services/loading.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading$!: Observable<boolean>;

  constructor(public loaderService: LoadingService, private user: UserService) {
    loaderService.isLoading.pipe((loader) => (this.isLoading$ = loader));
  }
}
