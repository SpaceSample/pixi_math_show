import { Graphics, Text } from 'pixi.js';
import { ctx } from './context';

let xAxisLine: Graphics;
let yAxisLine: Graphics;

export const drawAxis = () => {
  const h = ctx.maxY;
  const w = ctx.maxX;

  xAxisLine = new Graphics();
  xAxisLine.lineStyle(1, 0xFFFFFF, 1);
  xAxisLine.moveTo(-w, 0);
  xAxisLine.lineTo(w, 0);
  ctx.addChild(xAxisLine);
  const xTriangle = new Graphics();
  xTriangle.beginFill(0xFFFFFF);
  xTriangle.drawPolygon([
    w - 10, 5,
    w, 0,
    w - 10, -5
  ]);
  ctx.addChild(xTriangle);
  const xMark = new Text('X', { fontSize: 16, fill: 'white', stroke: 'white' });
  xMark.position.set(w - 15, -5);
  ctx.addChild(xMark);
  xMark.scale.y = -1;

  yAxisLine = new Graphics();
  yAxisLine.lineStyle(1, 0xFFFFFF, 1);
  yAxisLine.moveTo(0, -h);
  yAxisLine.lineTo(0, h);
  ctx.addChild(yAxisLine);
  const yTriangle = new Graphics();
  yTriangle.beginFill(0xFFFFFF);
  yTriangle.drawPolygon([
    5, h - 10,
    0, h,
    - 5, h - 10
  ]);
  ctx.addChild(yTriangle);
  const yMark = new Text('Y', { fontSize: 16, fill: 'white', stroke: 'white' });
  yMark.position.set(5, h - 15);
  ctx.addChild(yMark);
  yMark.scale.y = -1;

  const zeroMark = new Text('0', { fontSize: 16, fill: 'white', stroke: 'white' });
  zeroMark.position.set(- 15, -15);
  ctx.addChild(zeroMark);
};
