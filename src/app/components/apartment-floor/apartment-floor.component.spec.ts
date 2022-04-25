import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentFloorComponent } from './apartment-floor.component';

describe('ApartmentFloorComponent', () => {
  let component: ApartmentFloorComponent;
  let fixture: ComponentFixture<ApartmentFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentFloorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
