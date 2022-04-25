import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryProcessComponent } from './summary-process.component';

describe('SummaryProcessComponent', () => {
  let component: SummaryProcessComponent;
  let fixture: ComponentFixture<SummaryProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
