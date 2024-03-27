import historicalDataOHSL from "@/mocks/historicalCoin.json"
import { useState } from "react"
import { OHLC } from "../types/OHLC"

interface MockedOHLC extends Omit<OHLC, "time"> {}

export default function useMockedOHSL(): MockedOHLC[] {
  const [mockedResource] = useState(historicalDataOHSL)

  return mockedResource as unknown as MockedOHLC[]
}