import { useEffect } from "react"

import useLenisScroll from "@/common/hooks/useLenisScroll"

interface Props extends React.PropsWithChildren {
  timeInMs?: number
}

export default function ResetPageScrollPosition({
  timeInMs = 0,
  children,
}: Props) {
  const lenis = useLenisScroll()

  useEffect(() => {
    function handlePageTransition() {
      document.documentElement.style.overflowY = "scroll"
      lenis?.start()
    }

    lenis?.stop()
    lenis?.scrollTo(0, { immediate: true, force: true })
    const timer = setTimeout(handlePageTransition, timeInMs)

    return () => {
      clearTimeout(timer)
      document.documentElement.style.overflowY = "hidden"
    }
  }, [timeInMs])

  return children
}
