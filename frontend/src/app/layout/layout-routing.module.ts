import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AuthorizationGuard } from '../core/guards/authorization.guard';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) },
      {
        path: 'admin-product/:id',
        loadChildren: () =>
          import('./pages/admin-product/admin-product.module').then((m) => m.AdminProductModule),
        canActivate: [AuthorizationGuard],
      },
      {
        path: 'admin-product',
        loadChildren: () =>
          import('./pages/admin-product/admin-product.module').then((m) => m.AdminProductModule),
        canActivate: [AuthorizationGuard],
      },
      {
        path: 'admin-products',
        loadChildren: () =>
          import('./pages/admin-products/admin-products.module').then((m) => m.AdminProductsModule),
        canActivate: [AuthorizationGuard],
      },
      {
        path: 'search',
        loadChildren: () => import('./pages/search/search.module').then((m) => m.SearchModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
