import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonoutChartComponent } from './donout-chart.component';

describe('DonoutChartComponent', () => {
  let component: DonoutChartComponent;
  let fixture: ComponentFixture<DonoutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonoutChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonoutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
