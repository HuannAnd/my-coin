import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import CoinPage from "./pages/CoinPage"

import Header from "./common/components/sections/Header/Header"
import ResetPageScrollPosition from "@/common/components/layouts/ResetPageScrollPosition"

export default function App() {
  return (
    <BrowserRouter>
      <ResetPageScrollPosition>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinPage />} />
        </Routes>
      </ResetPageScrollPosition>
    </BrowserRouter>
  )
}
