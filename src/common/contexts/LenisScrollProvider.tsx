import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import Lenis from "@studio-freight/lenis"
import { createContext, useLayoutEffect, useState } from "react"

interface Props extends React.PropsWithChildren {}

export const LenisContext = createContext<Lenis | null>(null)
export default function LenisScrollProvider({ children }: Props) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useLayoutEffect(() => {
    const newLenis = new Lenis({
      autoResize: true,
    })

    setLenis(newLenis)

    function raf(time: number) {
      newLenis.raf(time)
      requestAnimationFrame(raf)
    }

    newLenis.on("scroll", ScrollTrigger.update)

    gsap.ticker.add((time) => {
      newLenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    requestAnimationFrame(raf)

    return () => newLenis.destroy()
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}
