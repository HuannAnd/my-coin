import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import { useLayoutEffect, useRef } from "react"

import styles from "./Header.module.css"

import applyRefToChildren from "@/common/utils/apply-ref-to-children"

// High order component para lidar com animacoes usando gsap e ScrollTrigger para o Header.;
interface Props extends React.PropsWithChildren {}

const EDGE_DURATION_ANIMATION_IN_SECONDS = 0.3
const CONTENT_DURATION_ANIMATION_IN_SECONDS = EDGE_DURATION_ANIMATION_IN_SECONDS * 1

export default function ControlHeaderOnScroll({ children }: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(ref.current, { transformOrigin: "right" })

    const headerAnimations = gsap.context((context) => {
      const timeline = gsap.timeline({ defaults: { ease: "none" } })

      context.add("onCloseRightSide", () => {
        // timeline.set(`.${styles.right} .${styles.leftEdge}`, {
        //   scaleX: 1,
        //   transformOrigin: "right",
        // })
        timeline.set(`.${styles.right}`, {
          scaleX: 1,
          transformOrigin: "right",
        })
        // timeline.set(`.${styles.right} .${styles.rightEdge}`, {
        //   scaleX: 1,
        //   transformOrigin: "right",
        // })

        // timeline.to(`.${styles.right} .${styles.leftEdge}`, {
        //   scaleX: 0,
        //   duration: EDGE_DURATION_ANIMATION_IN_SECONDS
        // })
        timeline.to(`.${styles.right}`, {
          scaleX: 0,
          duration: CONTENT_DURATION_ANIMATION_IN_SECONDS
        })
        // timeline.to(`.${styles.right} .${styles.rightEdge}`, {
        //   scaleX: 0,
        //   duration: EDGE_DURATION_ANIMATION_IN_SECONDS
        // })
      })

      context.add("onHeaderBackToHero", () => {
        timeline.set(`.${styles.right} .${styles.leftEdge}`, {
          scaleX: 0,
          transformOrigin: "right",
        })
        timeline.set(`.${styles.right}`, {
          scaleX: 0,
          transformOrigin: "right",
        })
        timeline.set(`.${styles.right} .${styles.rightEdge}`, {
          scaleX: 0, transformOrigin: "right",
        })

        timeline.to(`.${styles.right} .${styles.rightEdge}`, {
          scaleX: 1,
          duration: EDGE_DURATION_ANIMATION_IN_SECONDS
        })
        timeline.to(`.${styles.right}`, {
          scaleX: 1,
          duration: CONTENT_DURATION_ANIMATION_IN_SECONDS
        })
        timeline.to(`.${styles.right} .${styles.leftEdge}`, {
          scaleX: 1,
          duration: EDGE_DURATION_ANIMATION_IN_SECONDS
        })
      })
    }, ref)

    // Animacao de quando ele sai do Hero e de quando ele volta.
    const scrollTrigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 0,
      end: window.innerHeight,
      onLeave: () => headerAnimations.onCloseRightSide(),
      onLeaveBack: () => headerAnimations.onHeaderBackToHero(),
    })

    return () => {
      scrollTrigger.kill()
      headerAnimations.revert()
    }
  }, [])

  return applyRefToChildren(ref, children)
}
