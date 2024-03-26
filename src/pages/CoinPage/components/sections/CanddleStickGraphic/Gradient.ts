import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./CanvaMeasures";

const CANVAS_PADDING_X = 20;
const CANVAS_PADDING_Y = 0;

class Gradient {
  constructor(
    private index: number,
    private divisions: number,
    private numerator = 1
  ) { }

  public setNumerator(coeff: number){
    this.numerator = coeff 
  }

  public draw(context: CanvasRenderingContext2D) {
    const x0 = this.index * (CANVAS_WIDTH / this.divisions + CANVAS_PADDING_X) + CANVAS_PADDING_X
    const y0 = CANVAS_PADDING_Y
    
    const x1 = x0
    const y1 = CANVAS_HEIGHT + CANVAS_PADDING_Y

    context.beginPath()
    context.moveTo(x0, y0)
    context.lineTo(x1, y1)
    context.stroke()

  }
}