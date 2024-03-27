import MediaQueriesEnum from "@/common/enums/MediaQueriesEnum"
import { useMediaQuery } from "@/common/hooks/useMediaQuery"
import useCoins from "@/pages/Home/hooks/useCoins"
import CoinCard from "../../molecules/CoinCard"
import CoinBar from "@/common/components/atoms/CoinBar"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

interface Props extends React.HTMLAttributes<HTMLUListElement> {}
export default function CoinsList({ ...props }: Props) {
  const isMobile = useMediaQuery(MediaQueriesEnum.MOBILE)
  const navigate = useNavigate()
  
  const coins = useCoins()

  // O formato fica a sua preferencia
  const CardFormat = isMobile ? CoinBar : CoinCard
  const cardStylesSheetsModifier = isMobile ? "asBar" : "asCard"

  const redirectToCoinPage = useCallback((coinId: string) => {
    navigate(`/coin/${coinId}`)
  }, [])

  return (
    <ul {...props} data-card-format={cardStylesSheetsModifier}>
      {coins.length > 0
        ? coins.map((x, i) => (
            <CardFormat onClick={() => redirectToCoinPage(x.id)} key={`${CardFormat.name}_${i}`} {...x} />
          ))
        : null}
    </ul>
  )
}
