import { createContext, useLayoutEffect, useState } from "react"

export const PageScrollDirectionContext = createContext<string | null>(null)

interface Props extends React.PropsWithChildren {}

export default function PageScrollDirectionProvider({ children }: Props) {
  const [direction, setDirection] = useState<string | null>(null)

  useLayoutEffect(() => {
    let lastScrollY = window.scrollY

    function handleOnScroll() {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        // esse data-scroll-direction modificar estilos no .module.css
        setDirection("Down")
        document.body.setAttribute("data-scroll-direction", "Down")
      } else if (currentScrollY < lastScrollY) {
        setDirection("Up")
        document.body.setAttribute("data-scroll-direction", "Up")
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleOnScroll)

    return () => {
      window.removeEventListener("scroll", handleOnScroll)
    }
  }, [])

  return (
    <PageScrollDirectionContext.Provider value={direction}>
      {children}
    </PageScrollDirectionContext.Provider>
  )
}
