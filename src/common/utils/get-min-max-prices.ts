import { OHLC } from "../types/OHLC"

export default function getMinMaxPrices(ohlcArray: OHLC[] | undefined) {
  if (!ohlcArray || ohlcArray.length < 1) return { min: 0, max: 0 } // Valor padrão se não houver dados

  const maxPrice = Math.max(...ohlcArray.map(d => d.high))
  const minPrice = Math.min(...ohlcArray.map(d => d.low))

  console.log("Max price value: ", maxPrice)
  console.log("Min price value: ", maxPrice)

  return {
    min: minPrice,
    max: maxPrice,
  }
}