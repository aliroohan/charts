import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  chartOptions = {
    title: {
      text: "Basic Column Chart"
    },
    data: [{
      type: "column",
      dataPoints: [
      { label: "Apple",  y: 10  },
      { label: "Orange", y: 15  },
      { label: "Banana", y: 25  },
      { label: "Mango",  y: 30  },
      { label: "Grape",  y: 28  }
      ]
    }]                
  };
}
