import MediaQueriesEnum from "@/common/enums/MediaQueriesEnum"
import { useMediaQuery } from "@/common/hooks/useMediaQuery"
import useCoins from "@/pages/Home/hooks/useCoins"
import CoinCard from "../../molecules/CoinCard"
import CoinBar from "@/common/components/atoms/CoinBar"

interface Props extends React.HTMLAttributes<HTMLUListElement> {}
export default function CoinsList({ ...props }) {
  const isMobile = useMediaQuery(MediaQueriesEnum.MOBILE)
  const coins = useCoins()

  // Formato do card
  const CardFormat = isMobile ? CoinBar : CoinCard

  return (
    <ul {...props}>
      {coins.length > 0
        ? coins.map((x, i) => (
            <CardFormat key={`${CardFormat.name}_${i}`} {...x} />
          ))
        : null}
    </ul>
  )
}
