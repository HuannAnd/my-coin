import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import "index.css"
import "./lenis.css"

import ResetPageScrollPosition from "@/common/components/layouts/ResetPageScrollPosition"
import Providers from "@/common/contexts/Providers"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ResetPageScrollPosition>
      <Providers>
        <App />
      </Providers>
    </ResetPageScrollPosition>
  </React.StrictMode>
)
