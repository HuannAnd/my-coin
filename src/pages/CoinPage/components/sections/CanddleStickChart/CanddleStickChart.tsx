import { useEffect, useRef, useState } from "react"

import CanddleStick from "./CanddleStick"

import {
  CANVAS_HEIGHT,
  CANVAS_HORIZONTAL_LINES,
  CANVAS_VERTICAL_LINES,
  CANVAS_WIDTH,
} from "./CanddleStickChartMeasure"
import Grid from "./Grid"
import MediaQueriesEnum from "@/common/enums/MediaQueriesEnum"

// import useMockedOHSL from "@/common/hooks/useMockedOHLC"
import CanddleStickDate from "./TimeMetric"
import { OHLC } from "@/common/types/OHLC"

import useMinAndMaxPrices from "./useMinAndMaxPrice"
import useCoinOHLC from "@/common/hooks/useCoinOHLC"
import { useMediaQuery } from "@/common/hooks/useMediaQuery"
import TimeAxis from "./TimeAxis"
import PricesAxis from "./PricesAxis"

interface Props extends React.CanvasHTMLAttributes<HTMLDivElement> {}

export default function CanddleStickGraphic({ ...props }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)
  const isMobile = useMediaQuery(MediaQueriesEnum.MOBILE)

  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  const ohlcPrices = useCoinOHLC()
  const { min, max } = useMinAndMaxPrices(ohlcPrices as OHLC[])

  useEffect(
    function drawingChart() {
      if (!ohlcPrices) return
      if (ohlcPrices?.length < 1) return

      if (context) {
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

        for (let h = 0; h < CANVAS_VERTICAL_LINES; h++) {
          const verticalGridLine = new Grid(
            CANVAS_VERTICAL_LINES,
            isMobile ? 5 : 1,
            h
          )
          verticalGridLine.draw(context)
        }

        for (let v = 0; v < CANVAS_HORIZONTAL_LINES; v++) {
          const horizontalGridLine = new Grid(
            CANVAS_HORIZONTAL_LINES,
            isMobile ? 5 : 1,
            v,
            true
          )
          horizontalGridLine.draw(context)
        }

        ohlcPrices.forEach((x, i) => {
          const canddleStick = new CanddleStick(x as OHLC, i)
          canddleStick.setNormalize(min, max, 0, CANVAS_HEIGHT)
          canddleStick.draw(context)
        })

        // for (let vt = 0; vt < CANVAS_VERTICAL_LINES; vt++) {
        //   const canddlestickDate = new CanddleStickDate(
        //     CANVAS_VERTICAL_LINES,
        //     ohlcPrices[vt].time,
        //     vt
        //   )
        //   canddlestickDate.draw(context)
        // }

        context.fill()
      } else {
        console.error("No context found")
      }

      return () => {
        context?.restore()
      }
    },
    [context, ohlcPrices]
  )

  useEffect(
    function initCanvasContext() {
      const canvas = ref.current!

      if (canvas) {
        const context = canvas.getContext("2d")
        setContext(context)
      }

      return () => {
        context?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
      }
    },
    [setContext, ohlcPrices]
  )

  return (
    <div {...props}>
      <canvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} ref={ref}/>
      <PricesAxis/>
      <TimeAxis />
    </div>
  )
}
