import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  @Input() titulo: string = 'Gráfico';
  @Input() data: any = null;

  @Input('labels') labels: string[] = ['Data 1', 'data 2', 'data 3'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: this.data ? this.data : [
      { data: [350, 450, 100] },
      { data: [50, 150, 120] },
      { data: [250, 130, 70] }
    ]
  };

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
