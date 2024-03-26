import { OHLC } from "@/common/types/OHLC"

import { CANDDLE_WIDTH, CANVAS_HEIGHT, SPACE_BET_CANDDLE } from "./CanvaMeasures"

import linearInterpolation from "@/common/utils/linear-interpolation"

class CanddleStick {
  private normalize?: (num: number) => number
  constructor(private ohlc: OHLC, private index: number) {}
  public setNormalize(
    minPrice: number,
    maxPrice: number,
    minHeight: number,
    maxHeight: number
  ) {
    this.normalize = (num: number) =>
      linearInterpolation(num, minPrice, maxPrice, minHeight, maxHeight)
  }
  public draw(context: CanvasRenderingContext2D) {
    
    
    const ohlcMapped = {
      high: this.normalize!(this.ohlc.high),
      low: this.normalize!(this.ohlc.low),
      open: this.normalize!(this.ohlc.open),
      close: this.normalize!(this.ohlc.close),
    }

    const x =
    this.index * (CANDDLE_WIDTH + SPACE_BET_CANDDLE) + SPACE_BET_CANDDLE
    const openIsGreaterThanClose = this.ohlc.open > this.ohlc.close 
    const y = !openIsGreaterThanClose ? this.ohlc.open : this.ohlc.close
    
    const width = CANDDLE_WIDTH
    const height = Math.abs(ohlcMapped.close - ohlcMapped.open)

    const fill = openIsGreaterThanClose ? "#ff0000" : "#00ff00"
    
    context.beginPath()
    context.fillStyle = fill
    context.fillRect(x, y, width, height)
    context.fill()

    // context.fillText(`${ohlcMapped.close}`, x, this.ohlc.close)

    // const strokeColor = fill
    // // Desenhando agora as sombras de low e high
    // context.strokeStyle = strokeColor
    // context.beginPath()
    // context.moveTo(x + CANDDLE_WIDTH / 2, ohlcMapped.low)
    // context.lineTo(x + CANDDLE_WIDTH / 2, ohlcMapped.high)
    // context.stroke()
  }
}

export default CanddleStick
