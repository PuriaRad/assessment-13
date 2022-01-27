import { Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';

import { EButtonComponent } from './e-button.component';

describe('EButtonComponent', () => {
  let component: EButtonComponent;
  let fixture: ComponentFixture<EButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EButtonComponent],
      imports: [MatButtonModule],
      providers: [Renderer2],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
