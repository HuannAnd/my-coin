import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import CoinPage from "./pages/CoinPage"

import Header from "./common/components/sections/Header/Header"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinPage />} />
      </Routes>
    </BrowserRouter>
  )
}
