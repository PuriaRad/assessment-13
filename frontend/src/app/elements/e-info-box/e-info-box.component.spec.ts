import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EInfoBoxComponent } from './e-info-box.component';

describe('EInfoBoxComponent', () => {
  let component: EInfoBoxComponent;
  let fixture: ComponentFixture<EInfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EInfoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
