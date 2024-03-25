import applyRefToChildren from "@/common/utils/apply-ref-to-children"
import initSlideUpTextByTimeline from "@/common/components/atoms/SlideUpTextFromView/initSlideUpByTimeline"
import slideUpTextByTimeline from "@/common/components/atoms/SlideUpTextFromView/slideUpTextByTimeline"

import gsap from "gsap"

import styles from "./Hero.module.css"

import { useLayoutEffect, useRef } from "react"

import SplitType from "split-type"


interface Props extends React.PropsWithChildren {}

const TITLE_WORD_STAGGER_TIME_IN_SECONDS = 0.3
const SINGLE_WORD_REVEAL_DURATION_IN_SECONDS = 2.2

export default function HeroPageTransition({ children }: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    SplitType.create(`.${styles.scrollDown}`, { types: "words,chars" })

    let animate = gsap.context((context) => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

      timeline.set(`.${styles.title} svg`, {
        opacity: 0,
      })
      initSlideUpTextByTimeline(timeline, styles.scrollDown)

      context.add("revealTitle", () => {
        timeline.to(`.${styles.title} svg`, {
          opacity: 1,
          duration: SINGLE_WORD_REVEAL_DURATION_IN_SECONDS,
          stagger: TITLE_WORD_STAGGER_TIME_IN_SECONDS,
        })
      })

      context.add("scrollDownSlideUp", () =>
        slideUpTextByTimeline(timeline, {
          trigger: styles.scrollDown,
          delay: 1
        })
      )
    }, ref)

    animate.scrollDownSlideUp()
    animate.revealTitle()

    return () => animate.revert()
  }, [])

  return applyRefToChildren(ref, children)
}
