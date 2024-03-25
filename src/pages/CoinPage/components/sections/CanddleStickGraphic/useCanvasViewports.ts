import { useEffect, useState } from "react"

import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./CanvaMeasures"

import convertMeasureInPx from "@/common/utils/convert-measure-in-px"

interface CanvasViewports {
  width?: number
  height?: number
}

interface UseCanvasViewportsResult {
  width: number,
  height: number
}

// Aqui eu gerencio o canvas com as dimensoes da janela do usuario para o canvas ficar proporcional
export default function useCanvasViewports(
  {
    width = CANVAS_WIDTH,
    height = CANVAS_HEIGHT
  }: CanvasViewports = {}
): UseCanvasViewportsResult {
  const [canvasViewports, setCanvasViewports] = useState<UseCanvasViewportsResult>({
    width,
    height
  })

  useEffect(function canvasResizing() {
    function resize() {
      const rootStyles = getComputedStyle(document.documentElement)
      const containerPaddingInPx = convertMeasureInPx(rootStyles.getPropertyValue("--container-padding"))

      if (containerPaddingInPx) {

        const width = window.innerWidth - 2 * containerPaddingInPx
        const height = window.innerHeight

        setCanvasViewports({
          width,
          height
        })
      }
    }
    window.addEventListener("resize", resize)
    return () => {

      window.removeEventListener("resize", resize)
    }
  }, [])

  return canvasViewports
}