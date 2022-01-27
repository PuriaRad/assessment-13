import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { lastValueFrom } from 'rxjs';
import { IProduct } from 'src/app/classes/iproduct.interface';
import { Product } from 'src/app/classes/product';
import { ProductApiService } from 'src/app/core/api/custom/product-api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss'],
})
export class AdminProductComponent implements OnInit {
  form!: FormGroup;
  product!: Product;

  isEdit = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productAPI: ProductApiService,
    private router: Router,
    private title: Title
  ) {}

  async ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      discount: [0, Validators.required],
    });

    this.route.params.subscribe(async (params) => {
      if (params['id']) {
        this.isEdit = true;
        this.product = await lastValueFrom(this.productAPI.getProduct(+params['id']));
        this.form.patchValue(this.product);
        this.title.setTitle(`Admin-Product-Edit ${this.product.name}`);
      } else {
        this.product = new Product(
          -1,
          '',
          '',
          'http://placeimg.com/640/480/cats',
          [
            'http://placeimg.com/640/480/cats',
            'http://placeimg.com/640/480/cats',
            'http://placeimg.com/640/480/cats',
            'http://placeimg.com/640/480/cats',
          ],
          0,
          0
        );
        this.title.setTitle('Admin-Product-Create')
      }
    });
  }

  submit() {
    if (this.form.valid) {
      const data = this.form.getRawValue();
      if (this.isEdit) {
        const product: Required<IProduct> = {
          id: this.product.id,
          defaultImage: this.product.defaultImage,
          images: this.product.images,
          description: data.description,
          discount: data.discount,
          name: data.name,
          price: data.price,
        };
        this.productAPI.update(product).subscribe(() => {
          this.router.navigate(['/admin-products']);
        });
      } else {
        const product: IProduct = {
          defaultImage: this.product.defaultImage,
          images: this.product.images,
          description: data.description,
          discount: data.discount,
          name: data.name,
          price: data.price,
        };
        this.productAPI.create(product).subscribe(() => {
          this.router.navigate(['/admin-products']);
        });
      }
    } else {
      this.form.markAllAsTouched();
    }
  }
}
