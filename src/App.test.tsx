import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

import App from "./App"
import Providers from "./common/contexts/Providers"

describe("App", () => {
  test("render / route as base route", async () => {
    render(
      <Providers>
        <App />
      </Providers>
    )

    expect(
      screen.getByRole("heading", { name: "Home page" })
    ).toBeInTheDocument()
  })

})
