import { Graphics } from "@pixi/graphics";

import { ctx } from "./context";

/**
 * ax + by + c = 0;
 * @param a 
 * @param b 
 * @param c 
 */
export const drawLine = (a: number, b: number, c: number): Graphics | undefined => {
  if (a === 0 && b === 0) {
    return undefined;
  }
  const h = ctx.maxY;
  if (b === 0) {
    const line = new Graphics();
    line.lineStyle(1, 0xFFFFFF, 1);
    line.moveTo(-c / a, -h);
    line.lineTo(-c / a, h);
    ctx.addChild(line);
    return line;
  }
  const w = ctx.maxX;
  if (a === 0) {
    const line = new Graphics();
    line.lineStyle(1, 0xFFFFFF, 1);
    line.moveTo(w, -c / b);
    line.lineTo(-w, -c / b);
    ctx.addChild(line);
    return line;
  } else {
    const line = new Graphics();
    line.lineStyle(1, 0xFFFFFF, 1);
    line.moveTo(-w, -(c - a * w) / b);
    line.lineTo(w, -(c + a * w) / b);
    ctx.addChild(line);
    return line;
  }
};