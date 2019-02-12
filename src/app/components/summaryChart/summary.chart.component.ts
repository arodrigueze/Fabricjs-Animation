import { endRef, startRef } from 'src/app/const/summary.chart.consts';

import { Component } from '@angular/core';
import { angles } from 'src/app/helpers/angles';
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

    const radiusChart = (canvasContainerheight * 0.75) / 2;
    const strokeWidth = radiusChart * 0.1;
    const leftChart = (canvasContainerWidth - (radiusChart * 2) - strokeWidth) / 2;
    const topChart = (canvasContainerheight - (radiusChart * 2) - strokeWidth) / 2;

    const offSetStrokes = strokeWidth * 0.3;

    const chartOutStroke = new fabric.Circle({
      left: leftChart,
      top: topChart,
      radius: radiusChart - offSetStrokes,
      fill: '',
      stroke: 'red',
      strokeWidth: strokeWidth + (offSetStrokes * 2),
      startAngle: angles.getAngle(0),
      endAngle: angles.getAngle(360)
    });

    const circle = new fabric.Circle({
      left: leftChart,
      top: topChart,
      radius: radiusChart,
      fill: '',
      stroke: 'orange',
      strokeWidth: strokeWidth,
      startAngle: angles.getAngle(0),
      endAngle: angles.getAngle(0)
    });

    const circle2 = new fabric.Circle({
      left: leftChart,
      top: topChart,
      radius: radiusChart,
      fill: '',
      stroke: 'blue',
      strokeWidth: strokeWidth,
      startAngle: angles.getAngle(90),
      endAngle: angles.getAngle(90)
    });
    const group = new fabric.Group([chartOutStroke, circle, circle2]);
    group.selectable = false;
    this.canvas.add(group);

    circle.animate('endAngle', angles.getAngle(90), {
      duration: 1000,
      onChange: this.canvas.renderAll.bind(this.canvas)
    });
    circle2.animate('endAngle', angles.getAngle(180), {
      duration: 1000,
      onChange: this.canvas.renderAll.bind(this.canvas)
    });
    const currentCanvas = <HTMLCanvasElement>workWithDOM
      .getDOMElementById('summaryCanvas');

    const canvasContext = currentCanvas
      .getContext('2d');

    this.canvas.on('mouse:up', event => {
      console.log(Math.round(event.absolutePointer.x), Math.round(event.absolutePointer.y));
      const rgbSelectedColor = canvasContext
        .getImageData(Math.round(event.absolutePointer.x), Math.round(event.absolutePointer.y), 1, 1)
        .data;
      const hexColor = `#${rgbSelectedColor[0].toString(16)}${rgbSelectedColor[1].toString(16)}${rgbSelectedColor[2].toString(16)}`;
      console.log(hexColor);
      console.log(event.absolutePointer);
    });
  }
}
