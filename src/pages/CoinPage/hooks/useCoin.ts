import CoinGeckoHttpClient from "@/services/CoinGeckoHttpClient"
import { ICoinDetailsResponse } from "@/services/responses/CoinGeckoResponses"

import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

export default function useCoin(): ICoinDetailsResponse | undefined {
  const params = useParams()

  const { data: coin } = useQuery({
    queryKey: params.id,
    refetchOnWindowFocus: false,
    queryFn: async () => await CoinGeckoHttpClient.getCoinDetails(params.id!),
  })

  return coin
}
