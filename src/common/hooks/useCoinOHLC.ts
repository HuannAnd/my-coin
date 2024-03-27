import CoinGeckoHttpClient from "@/services/CoinGeckoHttpClient"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { OHLC } from "../types/OHLC"

export default function useCoinOHLC(): OHLC[] {
  const { id: coinId } = useParams()

  const { data } = useQuery({
    queryKey: `ohlc_${coinId}`,
    refetchOnWindowFocus: false,
    initialData: [],
    placeholderData: [],
    queryFn: async () => await CoinGeckoHttpClient.getOHLCCoinSpecs(coinId!),
  })

  return data as OHLC[]
}
