
import { ICoin } from "@/services/responses/CoinGeckoResponses";

import styles from "./CoinCard.module.css"

interface Props extends ICoin {}
export default function CoinBar({image, symbol, name}: Props) {
  return (
    <article className={styles.bar}>
      <img className={styles.image} src={image} alt={`Coin image of ${name}`} />
      <span className={styles.abbreviation}>{symbol}</span>
    </article>
  )
}