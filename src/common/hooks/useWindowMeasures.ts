import { useEffect, useState } from "react"

export default function useWindowMeasures() {
  const [windowMeasures, setWindowMeasures] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleOnResizeWindow = () =>
      setWindowMeasures({
        width: window.innerWidth,
        height: window.innerHeight,
      })

    window.addEventListener("resize", handleOnResizeWindow)
    return () => {
      window.removeEventListener("resize", handleOnResizeWindow)
    }
  }, [])

  return windowMeasures
}
