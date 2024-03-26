import { useEffect, useRef } from "react"

import gsap from "gsap"

import useTriggerRef from "./useTriggerRef"
import applyRefToChildren from "@/common/utils/apply-ref-to-children"
import BodyManager from "@/common/utils/BodyManager"
import { MetamaskConnectionStatusEnum } from "@/common/enums/MetamskEnums"

interface Props extends React.PropsWithChildren {}
export default function Trigger({ children }: Props) {
  const ref = useRef(null)
  const triggerRef = useTriggerRef()

  useEffect(() => {
    if (!ref.current) return
    if (!triggerRef?.current) return
    let isAnimating = false

    gsap.set(triggerRef.current, {
      overflow: "hidden",
    })

    const animate = gsap.context((context) => {
      const timeline = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } })

      timeline.set(ref.current, {
        y: "0%",
      })

      context.add("slideLoop", async () => {
        if (isAnimating) return
        isAnimating = true
        const isConnected = BodyManager.getMetamaskConnectionStatus() === MetamaskConnectionStatusEnum.CONNECTED

        if(isConnected) return

        await timeline
          .to(ref.current, {
            y: "-120%",
          })
          .set(ref.current, {
            y: "120%",
          })
          .to(ref.current, {
            y: "0%",
          })

        isAnimating = false
      })
    }, ref)

    function handleOnMouseOverTheTrigger() {
      animate.slideLoop()
    }

    triggerRef.current.addEventListener(
      "mouseenter",
      handleOnMouseOverTheTrigger
    )

    const missRef = triggerRef.current

    return () => {
      animate.revert()
      missRef.addEventListener("mouseenter", handleOnMouseOverTheTrigger)
    }
  }, [triggerRef, ref])

  return applyRefToChildren(ref, children)
}
