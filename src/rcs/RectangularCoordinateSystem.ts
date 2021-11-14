import { drawAxis } from './Axis';
import { app } from './context';
import { onResizeWindow } from './WindowResizer';

const init = () => {
  document.getElementById('canvasDiv')?.appendChild(app.view);
  // app.renderer.backgroundColor = 0x061639;
  // make it auto resize
  window.addEventListener('resize', onResizeWindow);
  onResizeWindow();
  drawAxis();
};



init();


export const getPixiApp = () => app;
