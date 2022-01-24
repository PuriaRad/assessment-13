import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{ path: '', component: LayoutComponent }, { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'product', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule) }, { path: 'admin-product', loadChildren: () => import('./pages/admin-product/admin-product.module').then(m => m.AdminProductModule) }, { path: 'admin-products', loadChildren: () => import('./pages/admin-products/admin-products.module').then(m => m.AdminProductsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
