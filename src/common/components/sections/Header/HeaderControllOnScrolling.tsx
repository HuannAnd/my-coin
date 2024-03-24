import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import { useLayoutEffect, useRef } from "react"

import styles from "./Header.module.css"

import applyRefToChildren from "@/common/utils/apply-ref-to-children"

// High order component para lidar com animacoes usando gsap e ScrollTrigger para o Header.;
interface Props extends React.PropsWithChildren {}

const EDGE_DURATION_ANIMATION_IN_SECONDS = 0.3
const CONTENT_DURATION_ANIMATION_IN_SECONDS = EDGE_DURATION_ANIMATION_IN_SECONDS * 1

export default function HeaderControllOnScrolling({ children }: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(ref.current, { transformOrigin: "right" })

    const animate = gsap.context((context) => {
      const timeline = gsap.timeline({ defaults: { ease: "none" } })
      timeline.set(`.${styles.right}`, {
        scaleX: 1,
        transformOrigin: "right",
      })
      
      context.add("onCloseRightSide", () => {
        console.log("fire onCloseRightSide")
        timeline.to(`.${styles.right}`, {
          scaleX: 0,
          duration: CONTENT_DURATION_ANIMATION_IN_SECONDS
        })
      })

      context.add("onHeaderBackToHero", () => {
        timeline.to(`.${styles.right}`, {
          scaleX: 1,
          duration: CONTENT_DURATION_ANIMATION_IN_SECONDS
        })
      })
    }, ref)

    // Animacao de quando ele sai do Hero e de quando ele volta.
    const scrollTrigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 0,
      end: window.innerHeight,
      onLeave: () => animate.onCloseRightSide(),
      onLeaveBack: () => animate.onHeaderBackToHero(),
    })

    return () => {
      animate.revert()
      scrollTrigger.kill()
    }
  }, [])

  return applyRefToChildren(ref, children)
}
