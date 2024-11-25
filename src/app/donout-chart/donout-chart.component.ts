import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-donout-chart',
  imports: [CanvasJSAngularChartsModule],
  templateUrl: './donout-chart.component.html',
  styleUrl: './donout-chart.component.css',
})
export class DonoutChartComponent {
  chartOptions = {
    animationEnabled: true,
    title: {
      text: 'Global Waste Treatment and Disposal',
    },
    data: [
      {
        type: 'doughnut',
        indexLabel: '{name}: {y}',
        innerRadius: '90%',
        yValueFormatString: "#,##0.00'%'",
        dataPoints: [
          { y: 33, name: 'Open Dump' },
          { y: 25, name: 'Landfill' },
          { y: 13.5, name: 'Recycling' },
          { y: 11, name: 'Incineration' },
          { y: 7.7, name: 'Sanitary Landfill (with landfill gas collection)' },
          { y: 5.5, name: 'Composting' },
          { y: 4, name: 'Controlled Landfill' },
          { y: 0.3, name: 'Others' },
        ],
      },
    ],
  };
}
