import styles from "./BarOption.module.css"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function BarOption({ className, ...rest }: Props) {
  return <button className={`${styles.asPops} ${className}`}></button>
}
