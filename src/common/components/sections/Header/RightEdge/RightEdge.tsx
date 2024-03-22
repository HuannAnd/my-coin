import styles from "./RightEdge.module.css"

interface Props extends React.SVGAttributes<SVGSVGElement> {}
export default function RightEdge({ className, ...rest }: Props) {
  return (
    <svg
      className={`${styles.base} ${className}`}
      // width="100%"
      height="100%"
      viewBox="0 0 13 50"
      fill="none"
      {...rest}
    >
      <path fill="#eee" d="M13 0 L 0 0 L 0 50" />
    </svg>
  )
}
