import ResetPageScrollPosition from "@/common/components/layouts/ResetPageScrollPosition"
import useMetamaskHandles from "@/common/hooks/useMetaMaskHandles"

import useCoin from "./hooks/useCoin"
import { useSDK as useMetaMask } from "@metamask/sdk-react"
import Sidebar from "./components/sections/Sidebar/Sidebar"
import CanddleStickGraphic from "./components/sections/CanddleStickGraphic/CanddleStickGraphic"

import styles from "./styles.module.css"

export default function CoinPage() {
  // const { account, balance, chainId, connected } = useMetaMask()
  // const { handleConnect, handleDisconnect } = useMetamaskHandles()

  const coin = useCoin()

  if (!coin) return <p>Loading...</p>
  console.log("current coin:", coin)

  const lastPriceRegisteredinDolar = coin?.tickers[0].converted_last.usd
  console.log(
    lastPriceRegisteredinDolar?.toString(),
    lastPriceRegisteredinDolar
  )

  return (
    <ResetPageScrollPosition>
      <section>
        <div className="container">
          <h2 className={styles.subtitle}>{coin.name}</h2>
          <div className={styles.layout}>
            <Sidebar.Root>
              <div className={styles.top}>
                <p className={styles.price}>
                  &#x24;{lastPriceRegisteredinDolar}
                </p>
                <span
                  className={styles.priceVariationInPercentage}
                  data-percentage-status="negative"
                >
                  {-0.077}"%"
                </span>
              </div>
            </Sidebar.Root>
            <CanddleStickGraphic className={styles.canddleStickGraphic}/>
          </div>
        </div>
      </section>
    </ResetPageScrollPosition>
  )
}
