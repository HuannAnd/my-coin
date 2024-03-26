import { useEffect, useState } from "react"

import {  CANVAS_HEIGHT } from "./CanvaMeasures"

import convertMeasureInPx from "@/common/utils/convert-measure-in-px"

interface CanvasViewports {
  width?: number
  height?: number
}

interface UseCanvasViewportsResult {
  width: number
  height: number
}

// Aqui eu gerencio o canvas com as dimensoes da janela do usuario para o canvas ficar proporcional
export default function useCanvasViewports({
  width = 1600,
  height = CANVAS_HEIGHT,
}: CanvasViewports = {}): UseCanvasViewportsResult {
  const [canvasViewports, setCanvasViewports] =
    useState<UseCanvasViewportsResult>({
      width,
      height,
    })

  useEffect(function canvasResizing() {
    function handleOnResize() {
      const rootStyles = getComputedStyle(document.documentElement)
      const containerPadding = rootStyles.getPropertyValue("--container-padding")
      const containerPaddingInPx = convertMeasureInPx(containerPadding)

      if (containerPaddingInPx) {
        const newWidth = 0.8 * (window.innerWidth - 3 * containerPaddingInPx)
        const newHeight = CANVAS_HEIGHT 

        setCanvasViewports({
          width: newWidth,
          height: newHeight,
        })
      }
    }

    window.addEventListener("resize", handleOnResize)
    return () => {
      window.removeEventListener("resize", handleOnResize)
    }
  }, [])

  return canvasViewports
}
