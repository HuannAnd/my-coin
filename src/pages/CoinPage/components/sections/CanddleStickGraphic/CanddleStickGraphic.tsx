import { useLayoutEffect, useMemo, useRef, useState } from "react"
import mockedHistoricalData from "@/mocks/historicalCoin.json"
import useCoinOHLC from "@/common/hooks/useCoinOHLC"
import CanddleStick from "./CanddleStickChart"
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./CanvaMeasures"
import { OHLC } from "@/common/types/OHLC"

interface Props extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}
export default function CanddleStickGraphic({ ...props }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const ohlc = useCoinOHLC()
  const { min, max } = useMemo(() => {
    if (!ohlc || ohlc.length < 1) return { min: 0, max: 0 } // Valor padrão se não houver dados

    const greaterAvaluated = ohlc
      .map(({ open, close, high, low }) => Math.max(open, close, high, low))
      .sort((a, b) => a - b)

    console.log("minPrice", greaterAvaluated[0])
    console.log("maxPrice", greaterAvaluated[greaterAvaluated.length - 1])

    return {
      min: greaterAvaluated[0],
      max: greaterAvaluated[greaterAvaluated.length - 1],
    }
  }, [ohlc])

  const drawChart = (ctx: CanvasRenderingContext2D) => {
    console.log("inside drawChart")
    if (!ohlc) return
    if (ohlc?.length < 1) return
    console.log("ohlc have more than one")
    if (ctx) {
      ohlc.forEach((x, i) => {
        console.log("OHLC single data:", x)
        const canddleStick = new CanddleStick(x as unknown as OHLC, i)
        canddleStick.setNormalize(min, max, 0, CANVAS_HEIGHT)
        canddleStick.draw(ctx)
      })

      ctx.fill()
    } else {
      console.error("No context found")
    }
  }

  useLayoutEffect(() => {
    if (!ref.current) return
    const canvas = ref.current

    if (canvas) {
      const context = canvas.getContext("2d")
      setContext(context)
      context && drawChart(context!)
    }

    return () => {}
  }, [setContext, ohlc])

  return (
    <canvas
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      ref={ref}
      {...props}
    ></canvas>
  )
}
