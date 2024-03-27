import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import { useLayoutEffect, useRef } from "react"

import applyRefToChildren from "@/common/utils/apply-ref-to-children"

// High order component para lidar com animacoes usando gsap e ScrollTrigger para o Header.;
interface Props extends React.PropsWithChildren {}

const DURATION_EACH_GEOMETRY = 1.1


export default function HeaderControllOnScrolling({ children }: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const animate = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power4.out", duration: DURATION_EACH_GEOMETRY },
      })

      timeline.set("button", {
        scaleX: 0,
        transformOrigin: "right"
      })
      timeline.set("button svg g > *", {
        scale: 0,
        transformOrigin: "center"
      })
      timeline.set("span", {
        opacity: 0
      })
      timeline.set("img", {
        opacity: 0
      })
      
      timeline.to("button", {
        scaleX: 1
      })
      timeline.to("button svg g > *", {
        scale: 1,
        duration: 1.2,
        stagger: 0.3
      })
      timeline.add("contentAppear")
      timeline.to("span", {
        opacity: 1
      }, "contentAppear")
      timeline.to("img", {
        opacity: 1
      }, "contentAppear")
    }, ref)

    return () => animate.revert()
  }, [])

  return applyRefToChildren(ref, children)
}
