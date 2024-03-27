import applyRefToChildren from "@/common/utils/apply-ref-to-children"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import { useLayoutEffect, useRef } from "react"
interface Props extends ScrollTrigger.Vars, React.PropsWithChildren {
  speed?: number
  orientation?: "towardsMe" | "awayFromMe"
  initialYPercentage?: 0
}
export default function Parallax({
  trigger,
  speed = 1,
  orientation = "towardsMe",
  start = "top bottom",
  end = "bottom top",
  initialYPercentage = 0,
  children,
  ...opts
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    // criando a gsap func para alterar a altura do objeto(parallax somente vertical)
    gsap.registerPlugin(ScrollTrigger)
    const setY = gsap.quickSetter(ref.current, "y", "%")

    const scrollTrigger = ScrollTrigger.create({
      trigger: trigger ?? document.documentElement,
      start,
      end,
      onUpdate: (self) => {
        // a posicao envolve se altera de acordo com a orientacao se o objeto ele vem ou foge da tela.
        // o valor que comeca o objeto e por fim a velocidade.

        const newYPosition =
          (orientation === "towardsMe" ? 1 : -1) *
          (-2 * initialYPercentage * speed * self.progress + initialYPercentage)

        setY(newYPosition)
      },
      ...opts,
    })

    return () => scrollTrigger.kill()
  }, [trigger, start, end, JSON.stringify(opts)])

  return applyRefToChildren(ref, children)
}
