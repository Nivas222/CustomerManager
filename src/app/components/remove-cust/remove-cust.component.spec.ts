import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCustComponent } from './remove-cust.component';

describe('RemoveCustComponent', () => {
  let component: RemoveCustComponent;
  let fixture: ComponentFixture<RemoveCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCustComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
