import styles from "./LeftEdge.module.css"

interface Props extends React.SVGAttributes<SVGSVGElement> {}
export default function LeftEdge({className, ...rest}: Props) {
  return (
    <svg
      className={`${styles.base} ${className}`}
      // width="100%"
      height="100%"
      viewBox="0 0 13 50"
      fill="none"
      {...rest}
    >
      <path fill="#eee" d="M0 50 L 13 50 L 13 0" />
    </svg>
  )
}