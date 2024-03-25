import { OHLC } from "../types/OHLC"

interface OHLCWithoutTimeKey extends Omit<OHLC, "time"> {}
export default function getMinMaxPrices(ohlcArray: OHLCWithoutTimeKey[]) {
  if (!ohlcArray || ohlcArray.length < 1) return { min: 0, max: 0 } // Valor padrão se não houver dados

  const greaterAvaluated = ohlcArray
    .map(({ open, close, high, low }) => Math.max(open, close, high, low))
    .sort((a, b) => a - b)

  return {
    min: greaterAvaluated[0],
    max: greaterAvaluated[greaterAvaluated.length - 1],
  }
}