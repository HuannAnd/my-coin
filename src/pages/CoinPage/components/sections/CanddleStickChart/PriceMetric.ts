import Formats from "@/common/utils/Formats"

class PriceMetric {
  constructor(private pricePerGrid: number, private index: number) {}
  public draw(context: CanvasRenderingContext2D) {
    const x = 70 / 2
    const y = (this.index + 1) * this.pricePerGrid
    const fill = "#000"
    const price = this.pricePerGrid * this.index
    const priceFormated = Formats.priceFormat(price)

    context.fillStyle = fill
    context.textBaseline = "middle"
    context.textAlign = "center"
    context.font = "9px serif"
    context.fillText(priceFormated, x, y, 300)
  }
}

export default PriceMetric
