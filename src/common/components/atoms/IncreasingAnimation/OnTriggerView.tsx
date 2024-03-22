import applyRefToChildren from "@/common/utils/apply-ref-to-children"
import digitsOfNumber from "@/common/utils/digits-of-number"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import { useLayoutEffect, useRef } from "react"


interface Props extends React.PropsWithChildren {
  from:  number
  to: number
}

export default function OnTriggerView({children, from, to}: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)    

    let animate = gsap.context((context) => {
      const timeline = gsap.timeline()

      const digitsOfInitialNumber = digitsOfNumber(from)
      const digitsOfToNumber = digitsOfNumber(to)


      context.add("increasingCounter", () => {

      })
    }, ref)

    const scrollTrigger = ScrollTrigger.create({
      trigger: trigger ?? document.documentElement,

    })
  }, [])

  return applyRefToChildren(ref, children)
}

function Example() {
  return (
    <h1>23</h1>
  )
}

function ResultOfHOC() {
  let quantity: number;
  
  return (
    <h1>
      <div className="text">
        {many.map()}
      </div>
    </h1>
  )
}