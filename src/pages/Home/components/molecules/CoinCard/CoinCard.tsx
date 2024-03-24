import { ICoin } from "@/services/responses/CoinGeckoResponses"
import { redirect, useNavigate } from "react-router-dom"

import styles from "./CoinCard.module.css"
import useLenisScroll from "@/common/hooks/useLenisScroll"

interface Props extends ICoin {}
export default function Card({
  id,
  name,
  symbol,
  image,
  price_change_percentage_24h,
  current_price,
  ...rest
}: Props) {
  const navigate = useNavigate()
  const lenis = useLenisScroll()

  const percentageInNumber = Number(price_change_percentage_24h)
  const percentageStatus = percentageInNumber < 0 ? "negative" : "positive"
  const isPositiveNumber = percentageStatus === "positive"

  const redirectToCoinPage = () => navigate(`coin/${id}`)

  function handleOnClick() {
    redirectToCoinPage()
    lenis?.scrollTo(0, { force: true, immediate: true })
  }

  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <div className={styles.origin}>
          <span className={styles.address}>0x1</span>
          <span className={styles.domain}>/bitcoin.org/</span>
        </div>
        <img className={styles.image} src={image} alt="Crypto image" />
        <p className={styles.name}>
          {name}
          <strong
            className={styles.percentage}
            data-percentage-status={percentageStatus}
          >
            {isPositiveNumber && "+"}
            {price_change_percentage_24h.toFixed(2)}
            {"%"}
          </strong>
        </p>
        <div className={styles.info}>
          <span className={styles.birthdate}>USA 2022</span>
          <span className={styles.tax}>
            <img
              className={styles.miniImage}
              src={image}
              alt="Crypto Logo image"
            />
            <abbr className={styles.abbreviation}>{symbol}</abbr>
          </span>
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.type}>Crypto</span>
        <button onClick={handleOnClick} className={styles.viewMore}>
          <svg
            className={styles.circle}
            fill="none"
            height="100%"
            viewBox="0 0 10 10"
          >
            <circle fill="var(--color-black-400)" cx="5" cy="5" r="4.9" />
          </svg>
        </button>
      </div>
    </article>
  )
}
