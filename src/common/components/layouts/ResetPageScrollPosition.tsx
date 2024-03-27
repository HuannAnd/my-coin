import { useEffect } from "react"

interface Props extends React.PropsWithChildren {}

const TIME_TO_ABLE_SCROLL_IN_MS = 3000

export default function ResetPageScrollPosition({children}: Props) {
  useEffect(() => {
    function handlePageTransition() {
      document.documentElement.style.overflowY = "scroll"
    }

    const timer = setTimeout(handlePageTransition, TIME_TO_ABLE_SCROLL_IN_MS)

    return () => {
      clearTimeout(timer)  
      document.documentElement.style.overflowY = "hidden"
    }
  }, [])

  return children
}
