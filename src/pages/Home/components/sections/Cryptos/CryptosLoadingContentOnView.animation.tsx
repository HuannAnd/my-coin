import { useLayoutEffect, useRef } from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import SplitType from "split-type"

import styles from "./Cryptos.module.css"

import applyRefToChildren from "@/common/utils/apply-ref-to-children"
import MediaQueriesEnum from "@/common/enums/MediaQueriesEnum"
import initSlideUpByScope from "@/common/components/atoms/SlideUpTextFromView/initSlideUpByTimeline"
import slideUpTextByTimeline from "@/common/components/atoms/SlideUpTextFromView/slideUpTextByTimeline"

interface Props extends React.PropsWithChildren {}

const TITLE_REVEAL_DURATION = 0.6
const SINGLE_CARD_ANIMATION_DURATION_IN_SECONDS = 0.4
const STAGGER_CARDS_IN_SECONDS = 0.06

export default function CryptosLoadingContentOnViewAnimation({ children }: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    SplitType.create(`.${styles.subtitle}`, { types: "words,chars" })
    let mm = gsap.matchMedia()

    mm.add(
      {
        isMobile: MediaQueriesEnum.MOBILE,
      },
      (context) => {
        const { isMobile } = context.conditions!
        const timeline = gsap.timeline({ defaults: { ease: "power2.inOut" } })
        initSlideUpByScope(timeline, styles.subtitle)
        timeline.set(`.${styles.coins} article`, {
          position: "relative",
          opacity: 0,
          y: "40%",
        })

        context.add("onScrollView", () => {
          slideUpTextByTimeline(timeline, {
            trigger: styles.subtitle,
            duration: TITLE_REVEAL_DURATION,
          })
          timeline.to(`.${styles.coins} article`, {
            opacity: 1,
            stagger: STAGGER_CARDS_IN_SECONDS,
            // y: "0%",
            duration: SINGLE_CARD_ANIMATION_DURATION_IN_SECONDS,
          })
        })

        let scrollTrigger: ScrollTrigger

        if (isMobile) {
          scrollTrigger = ScrollTrigger.create({
            trigger: ref.current,
            // markers: true,
            once: true,
            start: "top center",
            onEnter: () => context.onScrollView(),
          })
        } else {
          scrollTrigger = ScrollTrigger.create({
            trigger: ref.current,
            // markers: true,
            once: true,
            start: "top 35%",
            onEnter: () => context.onScrollView(),
          })
        }

        return () => scrollTrigger.kill()
      }
    )

    return () => mm.revert()
  }, [])

  return applyRefToChildren(ref, children)
}
