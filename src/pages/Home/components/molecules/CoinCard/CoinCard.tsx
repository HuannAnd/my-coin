import { ICoin } from "@/services/responses/CoinGeckoResponses"
import { useNavigate } from "react-router-dom"

import styles from "./CoinCard.module.css"
import useLenisScroll from "@/common/hooks/useLenisScroll"
import CoinBar from "@/common/components/atoms/CoinBar/CoinBar"

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
          <span className={styles.type}>Cryptos</span>
          <CoinBar
            id={id}
            className={styles.bar}
            symbol={symbol}
            name={name}
            image={image}
          />
        </div>
        <img className={styles.image} src={image} alt="Crypto image" />
        <div className={styles.about}>
          <p className={styles.name}>{name}</p>
          <span className={styles.price}>
            {" "}
            &#x24; {current_price.toFixed(2)} USD{" "}
          </span>
        </div>
        <div className={styles.info}>
          <span className={styles.birthdate}>USA 2022</span>
          <span data-percentage-status="negative" className={styles.pricePercentageChange}>-7%</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.details}>Details</span>
        <button onClick={handleOnClick} className={styles.viewMore}>
          <svg
            // width="26"
            height="100%"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="13" cy="13" r="12.75" fill="#000" />
            <path d="M11 9L15 13L11 17" stroke="white" />
          </svg>
        </button>
      </div>
    </article>
  )
}
