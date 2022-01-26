import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CartService } from './core/services/cart.service';
import { LoadingService } from './core/services/loading.service';
import { UserService } from './core/services/user.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule.forRoot(), ServiceWorkerModule],
      declarations: [AppComponent],
      providers: [LoadingService, UserService, CartService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
