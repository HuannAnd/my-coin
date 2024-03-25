import { useLayoutEffect, useMemo, useRef, useState } from "react"
import useMockedOHSL from "@/common/hooks/useMockedOHLC"
import useCanvasViewports from "./useCanvasViewports"

import CanddleStick from "./CanddleStickChart"
import { CANVAS_WIDTH } from "./CanvaMeasures"
import { OHLC } from "@/common/types/OHLC"


interface Props extends React.CanvasHTMLAttributes<HTMLCanvasElement> { }

export default function CanddleStickGraphic({ ...props }: Props) {
  const canvasViewports = useCanvasViewports()
  const ref = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  // const ohlc = useCoinOHLC()
  const mockedOhlcResource = useMockedOHSL()

  const { min, max } = useMemo(function getMinMaxPrices() {
    if (!mockedOhlcResource || mockedOhlcResource.length < 1) return { min: 0, max: 0 } // Valor padrão se não houver dados

    const greaterAvaluated = mockedOhlcResource
      .map(({ open, close, high, low }) => Math.max(open, close, high, low))
      .sort((a, b) => a - b)

    return {
      min: greaterAvaluated[0],
      max: greaterAvaluated[greaterAvaluated.length - 1],
    }
  }, [mockedOhlcResource])

  const drawChart = (ctx: CanvasRenderingContext2D) => {
    console.log("inside drawChart")
    if (!mockedOhlcResource) return
    if (mockedOhlcResource?.length < 1) return
    console.log("ohlc have more than one")
    if (ctx) {
      mockedOhlcResource.forEach((x, i) => {
        console.log("OHLC single data:", x)
        const canddleStick = new CanddleStick(x as unknown as OHLC, i)
        canddleStick.setNormalize(min, max, 0, canvasViewports.height)
        canddleStick.draw(ctx)
      })

      ctx.fill()
    } else {
      console.error("No context found")
    }
  }

  useLayoutEffect(function handleOnCanvas() {
    if (!ref.current) return
    const canvas = ref.current
    canvas.width = canvasViewports.width
    canvas.height = canvasViewports.height

    if (canvas) {
      const context = canvas.getContext("2d")
      setContext(context)
      context && drawChart(context!)
    }

    return () => { }
  }, [setContext, mockedOhlcResource, canvasViewports])

  return (
    <canvas
      width={CANVAS_WIDTH}
      ref={ref}
      {...props}
    ></canvas>
  )
}
