import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EInputComponent } from './e-input.component';

describe('EInputComponent', () => {
  let component: EInputComponent;
  let fixture: ComponentFixture<EInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
