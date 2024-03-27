import { useEffect } from "react"
import {
  CANVAS_HEIGHT,
  CANVAS_HORIZONTAL_LINES,
  CANVAS_VERTICAL_LINES,
} from "./CanddleStickChartMeasure"

import useCanvasContext from "./useCanvasContext"
import useCoinOHLC from "@/common/hooks/useCoinOHLC"

import PriceMetric from "./PriceMetric"

export default function PricesAxis() {
  const [context, canvasRef] = useCanvasContext()
  const ohlcPrices = useCoinOHLC()

  useEffect(
    function drawingTimeMetrics() {
      if (ohlcPrices.length < 1) return
      if (context) {
        for (let i = 0; i < CANVAS_VERTICAL_LINES; i++) {
          const dateText = new PriceMetric(
            CANVAS_HEIGHT / CANVAS_HORIZONTAL_LINES,
            i
          )
          dateText.draw(context)
        }
      }
    },
    [context, ohlcPrices]
  )

  return <canvas ref={canvasRef} height={CANVAS_HEIGHT} width={70} />
}
