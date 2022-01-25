import {
  Component,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from 'src/app/classes/product';
import { ProductApiService } from 'src/app/core/api/custom/product-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recoms$!: Observable<Product[]>;
  constructor(private productApi: ProductApiService) {}

  ngOnInit(): void {
    this.productApi.getRecommended().pipe((recoms) => (this.recoms$ = recoms));
  }

  search(event: Event) {}
}
