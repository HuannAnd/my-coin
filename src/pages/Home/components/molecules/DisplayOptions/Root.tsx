import { SVGAttributes } from "react"

import styles from "./Root.module.css"

interface Props extends React.HTMLAttributes<HTMLUListElement> {}

export default function DisplayOptionsRoot({
  children,
  className,
  ...rest
}: Props) {
  return (
    <ul className={`${styles.base} ${className}`} {...rest}>
      {children}
    </ul>
  )
}
