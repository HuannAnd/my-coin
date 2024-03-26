import { ICoin } from "@/services/responses/CoinGeckoResponses"

import styles from "./CoinBar.module.css"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

interface Props
  extends Pick<ICoin, "name" | "image" | "id" | "symbol">,
    Omit<React.HTMLAttributes<HTMLDivElement>, "id"> {}

export default function CoinBar({
  className,
  id,
  image,
  symbol,
  name,
  ...rest
}: Props) {
  // const navigate = useNavigate()
  // const redirectToCoinPage = useCallback(() => {
  //   navigate(`/coin/${id}`)
  // }, [navigate])

  return (
    <article className={`${className} ${styles.bar}`} {...rest}>
      <img className={styles.image} src={image} alt={`Coin image of ${name}`} />
      <span className={styles.abbreviation}>{symbol}</span>
    </article>
  )
}
