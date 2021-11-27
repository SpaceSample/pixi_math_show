import { drawAxis } from './Axis';
import { ctx } from './context';

export const initRectangularCoordinateSystem = (targetCanvasId: string) => {
  document.getElementById(targetCanvasId)?.appendChild(ctx.view);
  setTimeout(() => {
    ctx.scale = 1;
    drawAxis();
  }, 20);
};
