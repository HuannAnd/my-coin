import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import CoinPage from "./pages/CoinPage"

import ResetPageScrollPosition from "@/common/components/layouts/ResetPageScrollPosition"
import LenisScrollProvider from "./common/contexts/LenisScrollProvider"
import Header from "@/common/components/sections/Header/Header"

export default function App() {
  return (
    <LenisScrollProvider>
      <BrowserRouter>
        <ResetPageScrollPosition>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:id" element={<CoinPage />} />
          </Routes>
        </ResetPageScrollPosition>
      </BrowserRouter>
    </LenisScrollProvider>
  )
}
