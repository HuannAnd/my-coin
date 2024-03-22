// import CoinGeckoHttpClient from "./CoinGeckoHttpClient"

// interface CoinGeckoList {
//   id: string  
//   symbol: string
//   name: string
// }

// type ExchangeRates = Record<string, {name: string, unit: string, value: number, type: string}>[]

// export default {
//   async getListOfCoin() {
//     try {
//       const auth = CoinGeckoHttpClient.createAuthHeader(import.meta.env.VITE_COINGECKO_API_KEY)
//       const response = await CoinGeckoHttpClient.get<CoinGeckoList[]>("/coins/list", auth)
      
//       return response
//     } catch (e) {
//       console.error(e)
//     }
//   },

//   async getExchangeRates() {
//     try {
//       const auth = CoinGeckoHttpClient.createAuthHeader(import.meta.env.VITE_COINGECKO_API_KEY)
//       const exchangeRates = await CoinGeckoHttpClient.get<ExchangeRates>("/exchange_rates", auth)

//       return exchangeRates
//     } catch (error) {
      
//     }
//   },

//   async getTopCoins() {
//     try {
//       const auth = CoinGeckoHttpClient.createAuthHeader(import.meta.env.VITE_COINGECKO_API_KEY)
//       const coins = await CoinGeckoHttpClient.get("/coins/markets?vs_currency=usd&page=1&per_page=10&order=market_cap_desc&sparkline=false", auth)

//       console.log("coins inside getTop10Icons", coins)
    
//       return coins
//     } catch (error) {
//       console.error("Error inside of getTopCoins")
//       console.error(error)
//       return []
//     }
//   }
// }