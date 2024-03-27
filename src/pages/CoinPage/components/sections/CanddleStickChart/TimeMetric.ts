import Formats from "@/common/utils/Formats"
import {
  CANVAS_HEIGHT,
  CANVAS_PADDING_X,
  CANVAS_WIDTH,
} from "./CanddleStickChartMeasure"

const CANVAS_TEXT_OFFSET = 5
class TimeMetric {
  constructor(
    private divisions: number,
    private timestamp: number,
    private index: number
  ) {}

  public draw(context: CanvasRenderingContext2D) {
    const x =
      this.index * (CANVAS_WIDTH / this.divisions + CANVAS_PADDING_X) +
      CANVAS_PADDING_X -
      CANVAS_TEXT_OFFSET
    const y = 70 / 2
    const fill = "#000"
    const date = Formats.formatTimestamp(this.timestamp)

    context.fillStyle = fill
    context.textAlign = "center"
    context.font = "9px serif"
    context.fillText(date, x, y, 200)
  }
}

export default TimeMetric
