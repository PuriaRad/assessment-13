import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import {
  Observable,
  Subscription,
} from 'rxjs';

import { LoadingService } from './core/services/loading.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  isLoading$!: Observable<boolean>;
  loadingSub!: Subscription;
  constructor(public loaderService: LoadingService, private user: UserService) {
    user.autoLogin()
  }

  ngAfterViewInit() {
    this.loaderService.isLoading.pipe((loader) => (this.isLoading$ = loader));
  }
}
