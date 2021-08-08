'use strict';


interface Wrangler {
    height: number;
    width:number;
    the_canvas: string;
    x1: number;
    y1: number;
    x2: number;
    y2: number;

}

class Wrangler {

  constructor(x1:number ,y1:number ,x2: number ,y2: number ,canvas: string) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.the_canvas = canvas;
    this.height = this.y2 - this.y1;
    this.width = this.x2 - this.x1;
  }


   draw = () => {

    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
    // Examples of dashed lines 
    const LINE_DASH_STYLE = [2, 2];


    let el = <HTMLCanvasElement> document.getElementById(this.the_canvas);
    let ctx = el.getContext("2d")
    ctx.lineCap = "square";
    ctx.lineJoin = "miter";
    ctx.lineWidth = 1;
    ctx.miterLimit = 5;
    ctx.strokeStyle = '#FFA500';
    ctx.setLineDash(LINE_DASH_STYLE);
    ctx.lineWidth = 1;
    ctx.moveTo(this.x1, this.y1);
    ctx.lineDashOffset = 0.0;
    ctx.lineTo(this.x2, this.y1);   //top 
    ctx.lineDashOffset = 0.0;
    ctx.lineWidth = 2;
    ctx.lineTo(this.x2, this.y2);
    ctx.lineDashOffset = 0.0;
    ctx.lineTo(this.x1, this.y2);
    ctx.lineDashOffset = 0.0;
    ctx.lineWidth = 1;
    ctx.lineTo(this.x1, this.y1);  // bottom   
    
    //ctx.lineTo(this.x1, this.y2);
    //ctx.lineTo(this.x1, this.y2);

    ctx.stroke();
    //ctx.strokeRect(this.x1, this.y1, this.width, this.height);
    ctx.rect
   } 
    
}

export {Wrangler as default};
