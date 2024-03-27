import { MutableRefObject, useEffect, useRef, useState } from "react"

export default function useCanvasContext(): [CanvasRenderingContext2D | null, MutableRefObject<HTMLCanvasElement | null>]{
  const ref = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    const canvas = ref.current!

    if(canvas){
      const context = canvas.getContext("2d") 
      setContext(context!)
    }  

    return () => {
      context?.restore()
    }
  }, [context])

  return [context, ref]
}