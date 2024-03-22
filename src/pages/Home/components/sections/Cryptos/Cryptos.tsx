import { ICoin } from "@/services/responses/CoinGeckoResponses"
import styles from "./Cryptos.module.css"

import useCoins from "@/pages/Home/useCoins"

import CoinCard from "../../molecules/CoinCard/CoinCard"
import CryptosLoadingItemsOnScrollAnimation from "./CryptosLoadingItemsOnScrollAnimation"

interface Props {}

export default function Cryptos() {
  const coins = useCoins()

  if (!coins || coins?.length < 1) return <p>Carregando ne pai</p>

  return (
    <CryptosLoadingItemsOnScrollAnimation>
      <section className={styles.cryptos}>
        <div className={`${styles.upper} container`}>
          <h2 className={styles.subtitle}>
            Cryptocurrencies
            <span className={styles.counter}>10</span>
          </h2>
        </div>
        <ul className={`${styles.coins} container`}>
          {coins.map((x, i) => (
            <CoinCard key={`coin_${i}`} {...x} />
          ))}
        </ul>
      </section>
    </CryptosLoadingItemsOnScrollAnimation>
  )
}
