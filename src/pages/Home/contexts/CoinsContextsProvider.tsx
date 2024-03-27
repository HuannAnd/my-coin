import { createContext } from "react"

import { ICoin } from "@/services/responses/CoinGeckoResponses"
import { useQuery } from "react-query"
import CoinGeckoHttpClient from "@/services/CoinGeckoHttpClient"

export const CoinsContext = createContext<ICoin[]>([] as ICoin[])
export const CoinsLoadingContext = createContext<boolean | null>(null)

interface Props extends React.PropsWithChildren {}

export default function CoinsProvider({ children }: Props) {
  const { data: coins, isLoading } = useQuery({
    refetchOnWindowFocus: false,
    queryKey: "coins",
    initialData: [],
    placeholderData: [],
    queryFn: () => CoinGeckoHttpClient.getTopCoins(),
  })

  return (
    <CoinsLoadingContext.Provider value={isLoading}>
      <CoinsContext.Provider value={coins as ICoin[]}>
        {children}
      </CoinsContext.Provider>
    </CoinsLoadingContext.Provider>
  )
}
