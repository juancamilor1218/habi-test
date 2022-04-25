import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentAdditionalServicesComponent } from './apartment-additional-services.component';

describe('ApartmentAdditionalServicesComponent', () => {
  let component: ApartmentAdditionalServicesComponent;
  let fixture: ComponentFixture<ApartmentAdditionalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentAdditionalServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentAdditionalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
