import { Application, Container, DisplayObject } from "pixi.js";

interface ContextI {
  app: Application;
  graphContainer: Container;
}

const getCanvasWidth = () => Math.floor(window.innerWidth * 0.8);
const getCanvasHeight = () => window.innerHeight;
export class Context {
  private props: ContextI;
  /**
   * alias of props.graphContainer
   */
  private c: Container;

  constructor() {
    this.props = {
      app: new Application(),
      graphContainer: new Container(),
    };
    this.c = this.props.graphContainer;
    this.props.app.stage.addChild(this.c);
    this.scale = 1;
    const onResize = () => {
      const w = getCanvasWidth();
      const h = getCanvasHeight();
      this.props.app.renderer.resize(w, h);
      this.c.x = w / 2;
      this.c.y = h / 2;
      this.c.width = 0;
      this.c.height = 0;
    };
    onResize();
    window.addEventListener('resize', onResize);
  }

  set scale(s: number) {
    if (s <= 0) {
      return;
    }
    this.c.scale.x = s;
    this.c.scale.y = -s;
    console.log(this.c.scale.y);
  }

  get view() {
    return this.props.app.view;
  }

  get maxX() {
    const w = getCanvasWidth();
    return Math.floor(w * this.c.scale.x / 2);
  }

  get maxY() {
    const h = getCanvasHeight();
    return Math.floor(-h * this.c.scale.y / 2);
  }

  public addChild<T extends DisplayObject>(child: T): T {
    return this.c.addChild(child);
  }

  public removeChild<T extends DisplayObject>(child: T): T {
    return this.c.removeChild(child);
  }
}

export const ctx = new Context();
