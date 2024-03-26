import { OHLC } from "../types/OHLC"

interface OHLCWithoutTimeKey extends Omit<OHLC, "time"> {}
export default function getMinMaxPrices(ohlcArray: OHLCWithoutTimeKey[]) {
  if (!ohlcArray || ohlcArray.length < 1) return { min: 0, max: 0 } // Valor padrão se não houver dados

  const maxPrice = Math.max(...ohlcArray.map(d => d.high))
  const minPrice = Math.min(...ohlcArray.map(d => d.low))

  return {
    min: minPrice,
    max: maxPrice,
  }
}