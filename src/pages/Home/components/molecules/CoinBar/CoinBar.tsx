import { ICoin } from "@/services/responses/CoinGeckoResponses"

import styles from "./CoinBar.module.css"

interface Props
  extends Partial<ICoin>,
    Omit<React.HTMLAttributes<HTMLDivElement>, "id"> {}

export default function CoinBar({
  className,
  image,

  symbol,
  name,
}: Props) {
  return (
    <article className={`${className} ${styles.bar}`}>
      <img className={styles.image} src={image} alt={`Coin image of ${name}`} />
      <span className={styles.abbreviation}>{symbol}</span>
    </article>
  )
}
