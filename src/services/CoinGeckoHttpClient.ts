import { BaseHttpClient } from "./BaseHttpClient"
import CurrencyEnum from "./enums/Currency"
import OrderEnum from "./enums/Order"

import { ICoin } from "./responses/CoinGeckoResponses"

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
    const coins = await this.get<ICoin[]>(`/coins/markets?vs_currency=${currency}&page=${page}&per_page=${size}&order=${order}&sparkline=${sparkline}`, auth)

    return coins
  }

  public async getCoinDetails(coinId: string): Promise<ICoin> {
    const auth = this.createAuthHeader(import.meta.env.VITE_COINGECKO_API_KEY)
    const coin = await this.get<ICoin>(`/coins/${coinId}`, auth)

    return  coin
  }
}

export default new CoinGeckoHttpClient()
