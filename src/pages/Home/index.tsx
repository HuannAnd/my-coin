import ResetPageScrollPosition from "@/common/components/layouts/ResetPageScrollPosition"

import Cryptos from "./components/sections/Cryptos/Cryptos"
import Hero from "./components/sections/Hero/Hero"

export default function Home() {
  return (
      <ResetPageScrollPosition>
        <Hero />
        <Cryptos />
      </ResetPageScrollPosition>
  )
}
