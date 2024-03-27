import { useEffect, useRef, useState } from "react"

import CanddleStick from "./CanddleStick"

import useCoinOHLC from "@/common/hooks/useCoinOHLC"
import useMinAndMaxPrices from "./useMinAndMaxPrice"

import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./CanddleStickChartMeasure"
import Grid from "./Grid"
import { useMediaQuery } from "@/common/hooks/useMediaQuery"
import MediaQueriesEnum from "@/common/enums/MediaQueriesEnum"
import useMockedOHSL from "@/common/hooks/useMockedOHLC"
import { OHLC } from "@/common/types/OHLC"

interface Props extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

export default function CanddleStickGraphic({ ...props }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)
  const isMobile = useMediaQuery(MediaQueriesEnum.MOBILE)

  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  // const ohlcPrices = useCoinOHLC()
  const ohlcPrices = useMockedOHSL()
  const { min, max } = useMinAndMaxPrices(ohlcPrices as OHLC[])

  useEffect(
    function drawingChart() {
      if (!ohlcPrices) return
      if (ohlcPrices?.length < 1) return

      if (context) {
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        context.translate(0, CANVAS_HEIGHT)
        context.scale(1, -1)

        const gridLinesHorizontal = 10
        const gridLinesVertical = 5

        for (let h = 0; h < gridLinesVertical; h++) {
          const verticalGridLine = new Grid(
            gridLinesVertical,
            isMobile ? 3 : 1,
            h
          )
          verticalGridLine.draw(context)
        }

        for (let v = 0; v < gridLinesHorizontal; v++) {
          const horizontalGridLine = new Grid(
            gridLinesHorizontal,
            isMobile ? 5 : 1,
            v,
            true
          )
          horizontalGridLine.draw(context)
        }

        ohlcPrices.splice(0, 5).forEach((x, i) => {
          const canddleStick = new CanddleStick(x as OHLC, i)
          canddleStick.setNormalize(min, max, 0, CANVAS_HEIGHT)
          canddleStick.draw(context)
        })

        context.fill()
      } else {
        console.error("No context found")
      }

      return () => {
        context?.restore()
      }
    },
    [context, ohlcPrices, isMobile]
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
    <canvas
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      ref={ref}
      {...props}
    ></canvas>
  )
}
