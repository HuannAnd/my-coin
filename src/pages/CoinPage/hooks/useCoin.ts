import CoinGeckoHttpClient from "@/services/CoinGeckoHttpClient"

import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

export default function useCoin() {
  const params = useParams()

  const { data: coin } = useQuery({
    queryKey: params.id,
    queryFn: async () => await CoinGeckoHttpClient.getCoinDetails(params.id!),
  })

  return coin
}
