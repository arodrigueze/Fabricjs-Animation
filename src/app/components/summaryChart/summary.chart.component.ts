import { Component } from '@angular/core';
import { fabric } from 'fabric';
import { workWithDOM } from 'src/app/classes/DOMWorker';

@Component({
  selector: 'app-summary-chart-component',
  templateUrl: './summary.chart.component.html',
  styleUrls: ['./summary.chart.component.scss']
})
export class SummaryChartComponent {

  private canvas: any;

  constructor() { }

  ngAfterViewInit() {
    const canvasContainerWidth = workWithDOM.getDOMElementStyleById('summaryCanvasContainer', 'width');
    const canvasContainerheight = workWithDOM.getDOMElementStyleById('summaryCanvasContainer', 'height');
    console.log(canvasContainerWidth, canvasContainerheight);
    workWithDOM
      .addelementToDOM(
        'canvas',
        workWithDOM.getDOMElementById('summaryCanvasContainer'),
        [
          {
            key: 'id',
            value: 'summaryCanvas'
          },
          {
            key: 'width',
            value: `${canvasContainerWidth}`
          },
          {
            key: 'height',
            value: `${canvasContainerheight}`
          }
        ]
      );

    this.canvas = new fabric.Canvas('summaryCanvas');

    const radiusResponsive = (canvasContainerheight * 0.8) / 2;
    const leftResponsive = (canvasContainerWidth - (radiusResponsive * 2)) / 2;
    const circle = new fabric.Circle({
      radius: radiusResponsive,
      fill: '',
      left: leftResponsive,
      top: 10,
      stroke: 'orange',
      strokeWidth: 30
    });

    console.log(radiusResponsive, canvasContainerheight);
    this.canvas.add(circle);

    this.canvas.renderAll();
    console.log(this.canvas.getObjects());
  }
}
