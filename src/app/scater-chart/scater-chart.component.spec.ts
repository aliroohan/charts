import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaterChartComponent } from './scater-chart.component';

describe('ScaterChartComponent', () => {
  let component: ScaterChartComponent;
  let fixture: ComponentFixture<ScaterChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaterChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScaterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
