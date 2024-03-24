import styles from "./Cryptos.module.css"

import useCoins from "@/pages/Home/useCoins"

import CryptosLoadingItemsOnScrollAnimation from "./CryptosLoadingItemsOnScrollAnimation"
import GradientBlur from "@/common/components/molecules/GradientBlur"
import SlideUpTextFromView from "@/common/components/atoms/SlideUpTextFromView/SlideUpTextFromView"

import CoinBar from "../../molecules/CoinBar/CoinBart"
import CoinCard from "../../molecules/CoinCard/CoinCard"
import DisplayOptions from "../../molecules/DisplayOptions"
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
          <SlideUpTextFromView
            trigger={`.${styles.cryptos}`}
            start={isMobile ? "top center" : "top top"}
          >
            <h2 className={styles.subtitle}>
              <svg className={styles.leftLine} viewBox="0 0 1 100">
                <line
                  x1={0}
                  y1={0}
                  x2={0}
                  y2={100}
                  stroke="var(--color-pink-200)"
                />
              </svg>
              Every Day Metaverse
              <br />
              Is Quite Simple
            </h2>
          </SlideUpTextFromView>
          <DisplayOptions.Root>
            <DisplayOptions.CardOption />
            <DisplayOptions.BarOption />
          </DisplayOptions.Root>
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
