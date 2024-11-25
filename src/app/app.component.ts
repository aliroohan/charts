import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DonoutChartComponent } from './donout-chart/donout-chart.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { ScaterChartComponent } from './scater-chart/scater-chart.component';
import { StackedChartComponent } from './stacked-chart/stacked-chart.component';
import { RangeAreaChartComponent } from './range-area-chart/range-area-chart.component';

@Component({
  selector: 'app-root',
  imports: [CanvasJSAngularChartsModule, RouterOutlet, BarChartComponent, PieChartComponent, LineChartComponent,ScaterChartComponent, StackedChartComponent , DonoutChartComponent, GaugeChartComponent, RangeAreaChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
