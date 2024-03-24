import applyRefToChildren from "@/common/utils/apply-ref-to-children"

import gsap from "gsap"

import styles from "./Hero.module.css"

import { useLayoutEffect, useRef } from "react"

interface Props extends React.PropsWithChildren {}

const FIGMA_TITLE_MOCKUP_WIDTH_IN_PX = 911
const FIGMA_INITIAL_WHITE_MASK_WIDTH_IN_PX = 40
const FIGMA_WHITE_MASK_TOP_BOTTOM_RATIO = (FIGMA_INITIAL_WHITE_MASK_WIDTH_IN_PX / FIGMA_TITLE_MOCKUP_WIDTH_IN_PX)

const WHITE_MASK_TOP_INITIAL_PERCENTAGE = 100 * FIGMA_WHITE_MASK_TOP_BOTTOM_RATIO
const WHITE_MASK_DURATION_TO_REVEAL = 1.2

export default function HeroPageTransition({ children }: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    let animate = gsap.context((context) => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

      timeline.set(`.${styles.mask}`, {
        clipPath: `polygon(0 0, ${WHITE_MASK_TOP_INITIAL_PERCENTAGE}% 0, 0 100%, 0% 100%)`,
      })

      context.add("revealWhiteMask", () => {
        timeline.to(`.${styles.mask}`, {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          duration: WHITE_MASK_DURATION_TO_REVEAL,
          delay: 1,
          ease: "none"
        })
      })
    }, ref)

    animate.revealWhiteMask()

    return () => animate.revert()
  }, [])

  return applyRefToChildren(ref, children)
}
