import applyRefToChildren from "@/common/utils/apply-ref-to-children"

import gsap from "gsap"

import styles from "./Hero.module.css"

import { useLayoutEffect, useRef } from "react"

interface Props extends React.PropsWithChildren {}

const FIGMA_WHITE_MASK_ROTATION_IN_DEEGRE = -16
const SQUARE_INSIDE_ANGLE_IN_DEEGRE = 90

const WHITE_MASK_DURATION_TO_REVEAL = 1.2
const WHITE_MASK_ANGLE_IN_DEEGRE =
  180 -
  (SQUARE_INSIDE_ANGLE_IN_DEEGRE +
    Math.abs(FIGMA_WHITE_MASK_ROTATION_IN_DEEGRE))
const WHITE_MASK_ANGLE_IN_RADIANS = (WHITE_MASK_ANGLE_IN_DEEGRE * Math.PI) / 180

export default function HeroPageTransition({ children }: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    let animate = gsap.context((context) => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

      timeline.set(`.${styles.mask}`, {
        clipPath: `polygon(0 0, ${
          100 / Math.tan(WHITE_MASK_ANGLE_IN_RADIANS)
        }% 0, 0 100%, 0% 100%)`,
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
