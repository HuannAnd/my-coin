import styles from "./Cryptos.module.css"

import useCoins from "@/pages/Home/useCoins"

import CryptosLoadingItemsOnScrollAnimation from "./CryptosLoadingItemsOnScrollAnimation"
import GradientBlur from "@/common/components/molecules/GradientBlur"

import CoinBar from "../../molecules/CoinBar/CoinBar"
import CoinCard from "../../molecules/CoinCard/CoinCard"

import { useMediaQuery } from "@/common/hooks/useMediaQuery"
import MediaQueriesEnum from "@/common/enums/MediaQueriesEnum"

export default function Cryptos() {
  const coins = useCoins()
  const isMobile = useMediaQuery(MediaQueriesEnum.MOBILE)
  const DisplayCoinFormat = isMobile ? CoinBar : CoinCard

  if (!coins || coins?.length < 1) return <p>Loading...</p>

  return (
    <CryptosLoadingItemsOnScrollAnimation>
      <section className={styles.cryptos}>
        <GradientBlur className={styles.gradientBlur} />
        <div className={`${styles.upper} container`}>
          <h2 className={styles.subtitle}>
            Every Day Metaverse
            <br />
            Is Quite Simple
          </h2>
        </div>
        <ul className={`${styles.coins} container`}>
          {coins.map((x, i) => (
            <DisplayCoinFormat key={`${DisplayCoinFormat.name}_${i}`} {...x} />
          ))}
        </ul>
      </section>
    </CryptosLoadingItemsOnScrollAnimation>
  )
}
