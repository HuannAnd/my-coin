import styles from "./Cryptos.module.css"

import useCoins from "@/pages/Home/useCoins"

import CryptosLoadingItemsOnScrollAnimation from "./CryptosLoadingItemsOnScrollAnimation"
import GradientBlur from "@/common/components/molecules/GradientBlur"

import CoinBar from "@/common/components/atoms/CoinBar/CoinBar"
import CoinCard from "../../molecules/CoinCard/CoinCard"

import { useMediaQuery } from "@/common/hooks/useMediaQuery"
import MediaQueriesEnum from "@/common/enums/MediaQueriesEnum"
import { useNavigate } from "react-router-dom"
import { useCallback } from "react"

export default function Cryptos() {
  const coins = useCoins()
  const isMobile = useMediaQuery(MediaQueriesEnum.MOBILE)
  const DisplayCoinFormat = CoinCard

  const navigate = useNavigate()
  
  const redirectToCoinPage = useCallback((id: number | string) => {
    navigate(`/coin/${id}`)
  }, [navigate])
  
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
