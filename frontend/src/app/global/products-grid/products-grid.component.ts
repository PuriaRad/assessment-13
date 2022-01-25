import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss'],
})
export class ProductsGridComponent implements OnInit {
  @Input() products!: Observable<Product[]>;
  constructor() {}

  ngOnInit(): void {}
}
