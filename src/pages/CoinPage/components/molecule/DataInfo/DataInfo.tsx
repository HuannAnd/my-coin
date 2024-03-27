import styles from "./DataInfo.module.css"
interface Props {
  data: any,
  who: string
}
export default function Data({ data, who }: Props) {
  return (
    <dl className={styles.data}>
      <dt className={styles.resource}>
        <strong>{who}</strong>
      </dt>
      <dd className={styles.value}>{data}</dd>
    </dl>
  )
}