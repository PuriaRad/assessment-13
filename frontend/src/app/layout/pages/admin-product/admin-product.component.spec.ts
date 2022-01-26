import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductApiService } from 'src/app/core/api/custom/product-api.service';
import { EButtonModule } from 'src/app/elements/e-button/e-button.module';
import { EInputModule } from 'src/app/elements/e-input/e-input.module';
import { ImageGalleryModule } from 'src/app/global/image-gallery/image-gallery.module';

import { AdminProductComponent } from './admin-product.component';

describe('AdminProductComponent', () => {
  let component: AdminProductComponent;
  let fixture: ComponentFixture<AdminProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminProductComponent],
      providers: [ProductApiService, ActivatedRoute],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        EInputModule,
        ImageGalleryModule,
        EButtonModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
