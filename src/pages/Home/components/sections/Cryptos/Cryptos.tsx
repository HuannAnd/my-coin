import styles from "./Cryptos.module.css"

import useCoins from "@/pages/Home/hooks/useCoins"

import CryptosLoadingContentOnViewAnimation from "./CryptosLoadingContentOnView.animation"
import GradientBlur from "@/common/components/molecules/GridBlurred/GridBlurred"

import CoinsList from "../../organisms/CoinsList"

export default function Cryptos() {
  const coins = useCoins()

  return (
    <CryptosLoadingContentOnViewAnimation >
      <section className={styles.cryptos}>
        <GradientBlur className={styles.gradientBlur} />
        <div className={`${styles.upper} container`}>
          <h2 className={styles.subtitle}>
            Every Day Metaverse
            <br />
            Is Quite Simple
          </h2>
          <p>
            Coins {" "}
            <span>{coins.length > 0 ? coins.length : null}</span>
          </p>
        </div>
        <CoinsList className={`${styles.coins} container`}/>
      </section>
    </CryptosLoadingContentOnViewAnimation>
  )
}
