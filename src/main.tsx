import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import "index.css"
import "./lenis.css"

import Providers from "@/common/contexts/Providers"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
)
