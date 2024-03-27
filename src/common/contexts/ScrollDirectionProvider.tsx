import { createContext, useLayoutEffect, useState } from "react"
import BodyManager from "../utils/BodyManager"

export const PageScrollDirectionContext = createContext<string | null>(null)

interface Props extends React.PropsWithChildren {}

export default function PageScrollDirectionProvider({ children }: Props) {
  const [direction, setDirection] = useState<string | null>(null)

  useLayoutEffect(() => {
    let lastScrollY = window.scrollY

    function handleOnScroll() {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        // O Body manager ele ficar responsavel por gerenciar os estados do body com datasets:
        // que servem para usar em estilizacoes no .module.css

        setDirection("Down")
        BodyManager.setScrollDirection("Down")         
      } else if (currentScrollY < lastScrollY) {
        setDirection("Up")
        BodyManager.setScrollDirection("Up")
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
