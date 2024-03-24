import applyRefToChildren from "@/common/utils/apply-ref-to-children"

import { useLayoutEffect, useRef } from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import getAxisValues from "./getYvalueByDirection"

import SplitType from "split-type"

const STAGGER_SINGLE_LETTER_TIME_IN_SECONDS = 0.02
const SINGLE_LETTER_SLIDE_DURATION_IN_SECONDS = 1.2

interface Props extends ScrollTrigger.Vars, React.PropsWithChildren {
  delay?: number,
}

export default function SlideUpTextFromView({
  children,
  delay = 0,
  start = "top top",
  once = false,
  end = "top bottom",
  trigger = document.documentElement,
  ...opts
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    SplitType.create(ref.current!, { types: "words,chars" })

    let animate = gsap.context((context) => {
      const timeline = gsap.timeline({ defaults: { ease: "back.out" } })

      timeline.set(".word", {
        display: "inline",
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      })
      timeline.set(".char", {
        display: "inline-block",
        position: "relative",
        y: "100%",
      })

      context.add("onSlideInText", () => {
        timeline.to(".char", {
          y: "0%",
          delay,
          duration: SINGLE_LETTER_SLIDE_DURATION_IN_SECONDS,
          stagger: STAGGER_SINGLE_LETTER_TIME_IN_SECONDS,
        })
      })
    }, ref)

    const scrollTrigger = ScrollTrigger.create({
      start,
      end,
      onEnter: () => animate.onSlideInText(),
      trigger,
      once,
      ...opts,
    })

    return () => {
      scrollTrigger.kill()
      animate.revert()
    }
  }, [start, end, trigger, JSON.stringify(opts)])

  return applyRefToChildren(ref, children)
}
