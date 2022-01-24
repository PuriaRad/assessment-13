import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETextareaComponent } from './e-textarea.component';

describe('ETextareaComponent', () => {
  let component: ETextareaComponent;
  let fixture: ComponentFixture<ETextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ETextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ETextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
