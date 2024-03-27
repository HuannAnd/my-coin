import useCanvasContext from "./useCanvasContext"

import { CANVAS_VERTICAL_LINES, CANVAS_WIDTH } from "./CanddleStickChartMeasure"
import { useEffect } from "react"
import TimeMetric from "./TimeMetric"
import useCoinOHLC from "@/common/hooks/useCoinOHLC"

export default function TimeAxis() {
  const [context, canvasRef] = useCanvasContext()
  const ohlcPrices = useCoinOHLC()

  useEffect(
    function drawingTimeMetrics() {
      if(ohlcPrices.length < 1) return
      if (context) {
        for (let i = 0; i < CANVAS_VERTICAL_LINES; i++) {
          const dateText = new TimeMetric(
            CANVAS_VERTICAL_LINES,
            ohlcPrices[i].time,
            i
          )
          dateText.draw(context)
        }
      }
    },
    [context, ohlcPrices]
  )

  return <canvas ref={canvasRef} height={70} width={CANVAS_WIDTH}></canvas>
}
