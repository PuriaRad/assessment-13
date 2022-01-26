import { Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

import { NgxCurrencyModule } from 'ngx-currency';

import { EInputComponent } from './e-input.component';

describe('EInputComponent', () => {
  let component: EInputComponent;
  let fixture: ComponentFixture<EInputComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EInputComponent],
      providers: [Renderer2, { provide: FormBuilder, useValue: formBuilder }],
      imports: [MatRippleModule, MatButtonModule, ReactiveFormsModule, NgxCurrencyModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EInputComponent);
    component = fixture.componentInstance;
    component.formGroup = formBuilder.group({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
