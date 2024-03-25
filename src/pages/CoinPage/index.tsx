import ResetPageScrollPosition from "@/common/components/layouts/ResetPageScrollPosition"
import useMetamaskHandles from "@/common/hooks/useMetaMaskHandles"

import useCoin from "./hooks/useCoin"
import mockedCoin from "@/mocks/coin.json"
import { useSDK as useMetaMask } from "@metamask/sdk-react"
import Sidebar from "./components/sections/Sidebar/Sidebar"
import CanddleStickGraphic from "./components/sections/CanddleStickGraphic/CanddleStickGraphic"

import styles from "./styles.module.css"
import { useState } from "react"
import { ICoin } from "@/services/responses/CoinGeckoResponses"

// Typagem rigorosa de data
// interface Props<
//   TKey extends keyof ICoin,
//   TTypeOfKey extends ICoin[TKey]
// > {
//   data: TTypeOfKey
//   who: string
// }

interface Props {
  data: any,
  who: string
}


function Data({ data, who }: Props) {
  return (
    <dl className={styles.data}>
      <dt className={styles.resource}>{who}</dt>
      <dd className={styles.value}>{data}</dd>
    </dl>
  )
}

export default function CoinPage() {
  // const { account, balance, chainId, connected } = useMetaMask()
  // const { handleConnect, handleDisconnect } = useMetamaskHandles()

  // const coin = useCoin()
  const [coin] = useState(mockedCoin)

  if (!coin) return <p>Loading...</p>
  console.log("current coin:", coin)

  // const lastPriceRegisteredinDolar = coin?.tickers[0].converted_last.usd
  // console.log(
  //   lastPriceRegisteredinDolar?.toString(),
  //   lastPriceRegisteredinDolar
  // )

  return (
    <ResetPageScrollPosition>
      <section>
        <div className="container">
          <h2 className={styles.subtitle}>{coin.name}</h2>
          <div className={styles.layout}>
            <Sidebar.Root>
              <div className={styles.top}>
                <p className={styles.price}>
                  {/* &#x24;{lastPriceRegisteredinDolar} */}
                </p>
                <span
                  className={styles.priceVariationInPercentage}
                  data-percentage-status="negative"
                >
                  {-0.077}"%"
                </span>
              </div>
              <ul className={styles.info}>
                <Data who="Marketing Cap" data={coin.market_cap} />
                <Data who="Market Cap, Perc." data={coin.market_cap_change_percentage_24h}/>
                <Data who="Circulating Supply" data={coin.circulating_supply}/>
                <Data who="High Price" data={coin.high_24h}/>
                <Data who="Low Price" data={coin.low_24h}/>
                <Data who="Total Volume" data={coin.total_volume}/>
                <Data who="Market Cap. Rank" data={coin.market_cap_rank}/>
                <Data who="Diluation" data={coin.fully_diluted_valuation}/>
                <Data who="Market Cap Change (1d)" data={coin.market_cap_change_percentage_24h}/>
              </ul>
            </Sidebar.Root>
            <CanddleStickGraphic className={styles.canddleStickGraphic} />
          </div>
        </div>
      </section>
    </ResetPageScrollPosition>
  )
}
