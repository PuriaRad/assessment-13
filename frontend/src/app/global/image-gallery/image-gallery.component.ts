import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent implements OnInit {
  @Input() product!: Product;
  constructor() {}

  ngOnInit(): void {}
}
