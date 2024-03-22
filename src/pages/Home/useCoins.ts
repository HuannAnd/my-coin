import CoinGeckoHttpClient from "@/services/CoinGeckoHttpClient"
import { ICoin } from "@/services/responses/CoinGeckoResponses"
import { useQuery } from "react-query"

export default function useCoins() {
  const { data: coins } = useQuery<ICoin[], Error, ICoin[], string>({
    queryKey: "coins",
    initialData: [],
    placeholderData: [],
    queryFn: async () => await CoinGeckoHttpClient.getTopCoins(),
  })

  return coins
}
