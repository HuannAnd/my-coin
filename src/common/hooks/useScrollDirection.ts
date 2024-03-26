import { useContext } from "react"

import { PageScrollDirectionContext } from "@/common/contexts/ScrollDirectionProvider"

// Caso precisar de alguma animacao mais complexa
export default function useScrollDirection() {
  return useContext(PageScrollDirectionContext)
}
