import { OHLC } from "@/common/types/OHLC"
import getMinMaxPrices from "@/common/utils/get-min-max-prices"
import { useMemo } from "react"

export default function useMinAndMaxPrices(prices: OHLC[]) {
  return useMemo(() => getMinMaxPrices(prices), [prices])
}
