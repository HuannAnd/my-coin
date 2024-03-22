import { useLayoutEffect, useRef } from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import styles from "./Cryptos.module.css"

import applyRefToChildren from "@/common/utils/apply-ref-to-children"

interface Props extends React.PropsWithChildren {}

const TITLE_ANIMATION_DURATION_IN_SECONDS = 0.2
const SINGLE_CARD_ANIMATION_DURATION_IN_SECONDS = 0.4
const STAGGER_CARDS_IN_SECONDS = 0.1

export default function CryptosLoadingOnScrollView({ children }: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const animate = gsap.context((context) => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

      timeline.set(`.${styles.subtitle}`, {
        position: "relative",
        y: "100%",
        opacity: 0,
      })
      timeline.set(`.${styles.counter}`, {
        position: "relative",
        y: "100%",
        opacity: 0,
      })
      timeline.set(`.${styles.coins} article`, {
        position: "relative",
        opacity: 0,
        y: "20%",
      })

      context.add("onScrollView", () => {
        timeline.to(`.${styles.subtitle}`, {
          y: "0%",
          opacity: 1,
          duration: TITLE_ANIMATION_DURATION_IN_SECONDS,
        })
        timeline.to(`.${styles.counter}`, {
          y: "0%",
          opacity: 1,
          duration: TITLE_ANIMATION_DURATION_IN_SECONDS,
        })
        timeline.to(`.${styles.coins} article`, {
          opacity: 1,
          stagger: STAGGER_CARDS_IN_SECONDS,
          y: "0%",
          duration: SINGLE_CARD_ANIMATION_DURATION_IN_SECONDS,
        })
      })

      // Animacao de quando o usuario entra na parte de Cryptos
      const scrollTrigger = ScrollTrigger.create({
        trigger: ref.current,
        markers: true,
        once: true,
        start: "top 25%",
        onEnter: () => animate.onScrollView(),
      })

      return () => {
        scrollTrigger.kill()
        context.revert()
      }
    }, ref)
  }, [])

  return applyRefToChildren(ref, children)
}
