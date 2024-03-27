import Formats from "@/common/utils/Formats"
import Data from "../../molecule/DataInfo"

import useCoin from "@/pages/CoinPage/hooks/useCoin"

interface Props extends React.HTMLAttributes<HTMLUListElement> {}
export default function CoinInfoCollectin({...rest}: Props) {
  const coin = useCoin()
 
  if(!coin) return

  return (
    <ul {...rest}>
      <Data
        who="Market Cap"
        data={Formats.priceFormat(coin.market_data.market_cap.usd)}
      />
      <Data
        who="Market Cap, Perc."
        data={Formats.percentageFormat(
          coin.market_data.market_cap_change_percentage_24h
        )}
      />
      <Data
        who="Circulating Supply"
        data={coin.market_data.circulating_supply}
      />
      <Data
        who="High Price"
        data={Formats.priceFormat(coin.market_data.high_24h.usd)}
      />
      <Data
        who="Low Price"
        data={Formats.priceFormat(coin.market_data.low_24h.usd)}
      />
      <Data
        who="Total Volume"
        data={Formats.priceFormat(coin.market_data.total_volume.usd)}
      />
      <Data
        who="Market Cap. Rank"
        data={Formats.ordinalFormat(coin.market_data.market_cap_rank)}
      />
      <Data
        who="Diluation"
        data={Formats.priceFormat(coin.market_data.fully_diluted_valuation.usd)}
      />
      <Data
        who="Market Cap Change (1d)"
        data={Formats.percentageFormat(
          coin.market_data.market_cap_change_percentage_24h
        )}
      />
    </ul>
  )
}
