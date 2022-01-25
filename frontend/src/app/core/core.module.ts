import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ErrorHandler,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';

import { ErrorHandlerService } from './error/error-handler.service';
import { httpInterceptorProviders } from './interceptors';
import { LoadingService } from './services/loading.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        LoadingService,
        httpInterceptorProviders,
        { provide: ErrorHandler, useClass: ErrorHandlerService },
      ],
    };
  }
}
