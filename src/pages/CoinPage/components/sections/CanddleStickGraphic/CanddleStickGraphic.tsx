import { useEffect, useMemo, useRef, useState } from "react"
import useMockedOHSL from "@/common/hooks/useMockedOHLC"
import CanddleStick from "./CanddleStickChart"

import { OHLC } from "@/common/types/OHLC"
import getMinMaxPrices from "@/common/utils/get-min-max-prices"
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./CanvaMeasures"

interface Props extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

export default function CanddleStickGraphic({ ...props }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)

  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  // const canvasViewports = useCanvasViewports()
  // const ohlc = useCoinOHLC()
  const mockedOhlcResource = useMockedOHSL()
  const { min, max } = useMemo(
    () => getMinMaxPrices(mockedOhlcResource),
    [mockedOhlcResource]
  )

  useEffect(
    function drawingChart() {
      if (!mockedOhlcResource) return
      if (mockedOhlcResource?.length < 1) return

      if (context) {
        // context.setTransform(1, 0, 0, -1, 0, CANVAS_HEIGHT)

        mockedOhlcResource.forEach((x, i) => {
          const canddleStick = new CanddleStick(x as unknown as OHLC, i)
          canddleStick.setNormalize(min, max, 0, CANVAS_HEIGHT)
          canddleStick.draw(context)
        })

        context.fill()
      } else {
        console.error("No context found")
      }

      return () => {
        // context?.clearRect(0, 0, , CANVAS_HEIGHT)
        context?.restore()
      }
    },
    [context, mockedOhlcResource]
  )

  useEffect(
    function initCanvasContext() {
      const canvas = ref.current!

      if (canvas) {
        const context = canvas.getContext("2d")
        setContext(context)
      }

      return () => {}
    },
    [setContext, mockedOhlcResource]
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
