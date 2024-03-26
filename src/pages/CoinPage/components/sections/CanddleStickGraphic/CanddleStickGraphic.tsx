import { useEffect, useMemo, useRef, useState } from "react"

import CanddleStick from "./CanddleStickChart"

import getMinMaxPrices from "@/common/utils/get-min-max-prices"
import useCoinOHLC from "@/common/hooks/useCoinOHLC"
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./CanvaMeasures"

interface Props extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

export default function CanddleStickGraphic({ ...props }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)
  const [scaleY, setScaleY] = useState(1)

  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  // const canvasViewports = useCanvasViewports()
  const mockedOhlcResource = useCoinOHLC()
  // const mockedOhlcResource = useMockedOHSL()
  const { min, max } = useMemo(
    () => getMinMaxPrices(mockedOhlcResource),
    [mockedOhlcResource]
  )

  useEffect(function mouseWheelScalingCanddles() {
    function scalingCanddles(event: WheelEvent) {
      const newCanddleScale = event.deltaY

      setScaleY(newCanddleScale)
    }

    window.addEventListener("wheel", scalingCanddles)

    return () => {
      window.removeEventListener("wheel", scalingCanddles)
    }
  }, [])

  useEffect(
    function drawingChart() {
      if (!mockedOhlcResource) return
      if (mockedOhlcResource?.length < 1) return

      if (context) {
        mockedOhlcResource.forEach((x, i) => {
          const canddleStick = new CanddleStick(x, i, CANVAS_WIDTH * scaleY)
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
    [context, mockedOhlcResource, scaleY]
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
