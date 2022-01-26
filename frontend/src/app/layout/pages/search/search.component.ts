import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/classes/product';
import { ProductApiService } from 'src/app/core/api/custom/product-api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  keywords!: string;
  products$!: Observable<Product[]>;

  constructor(private route: ActivatedRoute, private productApi: ProductApiService, private title: Title) {
    title.setTitle('Search');
  }

  async ngOnInit() {
    this.route.queryParams.subscribe((qp) => {
      if (qp['keywords']) {
        this.keywords = qp['keywords'];
        this.search();
      }
    });
  }

  async search() {
    console.log('this.keywords >> ', this.keywords);
    this.productApi
      .getProducts(undefined, undefined, this.keywords)
      .pipe((products) => (this.products$ = products));
  }
}
