import CoinGeckoHttpClient from "@/services/CoinGeckoHttpClient"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

export default function useCoinOHLC() {
  const { id: coinId } = useParams()

  const { data } = useQuery({
    queryKey: `ohlc_${coinId}`,
    initialData: [],
    placeholderData: [],
    queryFn: async () => await CoinGeckoHttpClient.getOHLCCoinSpecs(coinId!),
  })

  console.log("ohlc coin data:", data)

  return data
}
