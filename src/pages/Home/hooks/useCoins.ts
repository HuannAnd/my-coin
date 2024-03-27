import { CoinsContext } from "../contexts/CoinsContextsProvider"
import { ICoin } from "@/services/responses/CoinGeckoResponses"
import { useContext } from "react"

export default function useCoins(): ICoin[] {
  return useContext(CoinsContext) 
}
