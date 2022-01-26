import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationExtras, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Product } from 'src/app/classes/product';
import { ProductApiService } from 'src/app/core/api/custom/product-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  keywords!: string;
  recoms$!: Observable<Product[]>;
  constructor(private productApi: ProductApiService, private router: Router, private title: Title) {
    title.setTitle('Home');
  }

  async ngOnInit() {
    this.productApi.getRecommended().pipe((recoms) => (this.recoms$ = recoms));
  }

  search() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        keywords: this.keywords,
      },
    };
    console.log(navigationExtras);
    this.router.navigate(['/search'], navigationExtras);
  }
}
