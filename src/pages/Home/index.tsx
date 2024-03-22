import useCoins from "./useCoins"

import Cryptos from "./components/sections/Cryptos/Cryptos"
import Hero from "./components/sections/Hero/Hero"

export default function Home() {
  // const coins = useCoins()
  // const coinsInMarketCapAscOrd = coins?.toReversed()

  return (
    <>
      <Hero />
      <Cryptos /> 
      {/* <h1>Home page</h1> */}

      {/* {coinsInMarketCapAscOrd?.map(x => <Card key={`coin_${x.id}`} coin={x}/>)} */}
    </>
  )
}
