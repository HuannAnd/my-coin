import { BaseHttpClient } from "./BaseHttpClient"

import CurrencyEnum from "./enums/Currency"
import OrderEnum from "./enums/Order"

import {
  ICoin,
  ICoinDetailsResponse,
  ICoinOHLCResponse,
} from "./responses/CoinGeckoResponses"
import { OHLC } from "@/common/types/OHLC"

const RESOURCE = "api/v3"

class CoinGeckoHttpClient extends BaseHttpClient {
  constructor() {
    super(`https://api.coingecko.com/${RESOURCE}`)
  }

  override createAuthHeader(token?: string) {
    console.log("override of createAuthHeader works")

    if (!token) {
      throw new Error("Enviroment variable GECKOCOIN_API_KEY is undefined")
    }

    return {
      headers: {
        "x-cg-demo-api-key": token,
      },
    }
  }

  public async getTopCoins(
    page = 1,
    size = 10,
    order = OrderEnum.MARKET_DESC,
    currency = CurrencyEnum.USD,
    sparkline = false
  ): Promise<ICoin[]> {
    const auth = this.createAuthHeader(import.meta.env.VITE_COINGECKO_API_KEY)
    const coins = await this.get<ICoin[]>(
      `/coins/markets?vs_currency=${currency}&page=${page}&per_page=${size}&order=${order}&sparkline=${sparkline}`,
      auth
    )

    return coins
  }

  public async getCoinDetails(coinId: string): Promise<ICoinDetailsResponse> {
    const auth = this.createAuthHeader(import.meta.env.VITE_COINGECKO_API_KEY)
    const coin = await this.get<ICoinDetailsResponse>(`/coins/${coinId}`, auth)

    return coin
  }

  public async getOHLCCoinSpecs(
    coinId: string | number,
    currency: CurrencyEnum = CurrencyEnum.USD,
    days = 30
  ): Promise<OHLC[]> {
    const auth = this.createAuthHeader(import.meta.env.VITE_COINGECKO_API_KEY)
    const ohlc = await this.get<ICoinOHLCResponse>(
      `/coins/${coinId}/ohlc?vs_currency=${currency}&days=${days}`,
      auth
    )
    console

    const newOHLC = ohlc.map((x) => ({
      time: x[0],
      open: x[1],
      high: x[2],
      low: x[3],
      close: x[4],
    }))

    return newOHLC
  }
}

export default new CoinGeckoHttpClient()
