import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./CanddleStickChartMeasure"

const CANVAS_PADDING_X = 20
const CANVAS_PADDING_Y = 20
const CANVAS_VERTICAL_LINES_NUMBER = 10
const CANVAS_GRID_LINE_COLOR = "#ddd"

class Grid {
  constructor(
    private divisions: number,
    private width: number,
    private numerator = 1,
    private isHorizontal: boolean = false
  ) {}

  public setNumerator(coeff: number) {
    this.numerator = coeff
  }

  public draw(context: CanvasRenderingContext2D) {
    const x0 = this.isHorizontal
      ? 0
      : this.numerator * (CANVAS_WIDTH / this.divisions + CANVAS_PADDING_X) +
        CANVAS_PADDING_X
    const y0 = this.isHorizontal
      ? (this.numerator + 1)*
        ((CANVAS_HEIGHT - 2 * CANVAS_PADDING_Y) / CANVAS_VERTICAL_LINES_NUMBER)
      : 0

    const x1 = this.isHorizontal ? CANVAS_WIDTH : x0
    const y1 = this.isHorizontal ? y0 : CANVAS_HEIGHT + CANVAS_PADDING_Y
    const fill = CANVAS_GRID_LINE_COLOR

    context.strokeStyle = fill
    context.lineWidth = this.width
    context.beginPath()
    context.moveTo(x0, y0)
    context.lineTo(x1, y1)
    context.stroke()
  }
}

export default Grid
