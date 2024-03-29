import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModelComponent } from './app-model.component';

describe('AppModelComponent', () => {
  let component: AppModelComponent;
  let fixture: ComponentFixture<AppModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
