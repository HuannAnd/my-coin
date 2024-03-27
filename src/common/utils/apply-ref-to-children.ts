import { Children, cloneElement } from "react"

export default function applyRefToChildren(
  ref: React.MutableRefObject<HTMLElement | null>,
  children: React.ReactNode
) {
  return Children.map(children, (child) =>
    cloneElement(child as React.ReactElement, { ref })
  )
}
