import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  MatPaginator,
  PageEvent,
} from '@angular/material/paginator';
import { _MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import {
  lastValueFrom,
  Observable,
} from 'rxjs';
import { Product } from 'src/app/classes/product';
import { ProductApiService } from 'src/app/core/api/custom/product-api.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  isLoadingResults = true;

  public displayedColumns = [
    'id',
    'defaultImage',
    'name',
    'description',
    'discount',
    'price',
    'edit',
    'delete',
  ];
  public dataSource = new _MatTableDataSource<Product>();

  pageIndex = 0;
  pageSize = 10;
  length = 1000; // we know it's 1000, otherwise we have to get it from the backend
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private router: Router, private productAPI: ProductApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    this.productAPI
      .getProducts(this.pageIndex, this.pageSize)
      .pipe((products) => (this.products$ = products));
    this.dataSource.data = await lastValueFrom(this.products$);
  }

  LimitOrders(event: PageEvent) {
    console.log(event);
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.fetchData();
    return event;
  }

  createProduct() {
    this.router.navigate(['/admin-product']);
  }

  edit(element: Product) {
    this.router.navigate(['/admin-product/' + element.id]);
  }

  remove(element: Product) {
    this.productAPI.delete(element.id).subscribe(() => {
      this.fetchData();
    });
  }
}
