import { useLayoutEffect, useRef } from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import styles from "./Cryptos.module.css"

import applyRefToChildren from "@/common/utils/apply-ref-to-children"
import MediaQueriesEnum from "@/common/enums/MediaQueriesEnum"

interface Props extends React.PropsWithChildren {}

const SINGLE_CARD_ANIMATION_DURATION_IN_SECONDS = 0.4
const STAGGER_CARDS_IN_SECONDS = 0.04

export default function CryptosLoadingOnScrollView({ children }: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let mm = gsap.matchMedia()

    mm.add(
      {
        isMobile: MediaQueriesEnum.MOBILE,
      },
      (context) => {
        const { isMobile } = context.conditions!
        const timeline = gsap.timeline({ defaults: { ease: "power2.inOut" } })

        timeline.set(`.${styles.subtitle}`, {
          position: "relative",
          y: "100%",
          opacity: 0,
        })
        timeline.set(`.${styles.coins} article`, {
          position: "relative",
          opacity: 0,
          y: "40%",
        })

        context.add("onScrollView", () => {
          timeline.to(`.${styles.coins} article`, {
            opacity: 1,
            stagger: STAGGER_CARDS_IN_SECONDS,
            y: "0%",
            duration: SINGLE_CARD_ANIMATION_DURATION_IN_SECONDS,
          })
        })

        let scrollTrigger: ScrollTrigger;

        if (isMobile) {
          scrollTrigger = ScrollTrigger.create({
            trigger: ref.current,
            markers: true,
            once: true,
            start: "top center",
            onEnter: () => context.onScrollView(),
          })
        } else {
          scrollTrigger = ScrollTrigger.create({
            trigger: ref.current,
            markers: true,
            once: true,
            start: "top 25%",
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
