import { Graphics, Text } from 'pixi.js';
import { app } from './context';
import { getCanvasHeight, getCanvasWidth } from './WindowResizer';

let xAxisLine: Graphics;
let yAxisLine: Graphics;

export const drawAxis = (scale = 1) => {
  const W = getCanvasWidth();
  const H = getCanvasHeight();
  const halfH = Math.floor(H / 2);
  const halfW = Math.floor(W / 2);

  xAxisLine = new Graphics();
  xAxisLine.lineStyle(1, 0xFFFFFF, 1);
  xAxisLine.moveTo(0, halfH);
  xAxisLine.lineTo(W, halfH);
  app.stage.addChild(xAxisLine);
  const xTriangle = new Graphics();
  xTriangle.beginFill(0xFFFFFF);
  xTriangle.drawPolygon([
    W - 10, halfH + 5,
    W, halfH,
    W - 10, halfH - 5
  ]);
  app.stage.addChild(xTriangle);
  const xMark = new Text('X', { fontSize: 16, fill: 'white', stroke: 'white' });
  xMark.position.set(W - 15, halfH + 15);
  app.stage.addChild(xMark);

  yAxisLine = new Graphics();
  yAxisLine.lineStyle(1, 0xFFFFFF, 1);
  yAxisLine.moveTo(halfW, H);
  yAxisLine.lineTo(halfW, 0);
  app.stage.addChild(yAxisLine);
  const yTriangle = new Graphics();
  yTriangle.beginFill(0xFFFFFF);
  yTriangle.drawPolygon([
    halfW + 5, 10,
    halfW, 0,
    halfW - 5, 10
  ]);
  app.stage.addChild(yTriangle);
  const yMark = new Text('Y', { fontSize: 16, fill: 'white', stroke: 'white' });
  yMark.position.set(halfW + 15, 5);
  app.stage.addChild(yMark);

  const zeroMark = new Text('0', { fontSize: 16, fill: 'white', stroke: 'white' });
  zeroMark.position.set(halfW - 15, halfH + 5);
  app.stage.addChild(zeroMark);
};
