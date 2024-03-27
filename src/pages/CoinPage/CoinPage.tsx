import ResetPageScrollPosition from "@/common/components/layouts/ResetPageScrollPosition"

import CoinCanddleStickChart from "./components/sections/CanddleStickChart"

import styles from "./CoinPage.module.css"
import useCoin from "./hooks/useCoin"

import CoinDataInfoCollection from "./components/organisms/CoinDataInfoCollection"

export default function CoinPage() {
  const coin = useCoin()

  if (!coin) return <p>Loading...</p>
  console.log("current coin.market_data.", coin)

  const lastPriceRegisteredinDolar = coin.tickers[0].converted_last.usd

  return (
    <ResetPageScrollPosition>
      <section className={styles.page}>
        <div className="container">
          <h2 className={styles.subtitle}>{coin.name}</h2>
          <div className={styles.layout}>
            <aside className={styles.sidebar}>
              <div className={styles.top}>
                <p className={styles.price}>
                  &#x24;{lastPriceRegisteredinDolar} USD
                </p>
                <span
                  className={styles.priceVariationInPercentage}
                  data-percentage-status="negative"
                >
                  {-0.077}%
                </span>
              </div>
              <CoinDataInfoCollection className={styles.info}/>
            </aside>
            <CoinCanddleStickChart className={styles.canddleStickChart} />
          </div>
        </div>
      </section>
    </ResetPageScrollPosition>
  )
}
