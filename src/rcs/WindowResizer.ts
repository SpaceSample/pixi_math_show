import { app } from "./context";

export const onResizeWindow = () => {
  app.renderer.resize(getCanvasWidth(), getCanvasHeight());
}

export const getCanvasWidth = () => Math.floor(window.innerWidth * 0.8);
export const getCanvasHeight = () => window.innerHeight;