import { render } from "@testing-library/react";
import { describe, test } from "vitest";

import MetaMaskProvider from "@/common/contexts/MetamaskProvider";

describe("Metamsak SDK test", () => {
  test("Verify Metamask SDK it be installed", async () => {
    render(
      <MetaMaskProvider>

      </MetaMaskProvider>
    )
  })

  test("Verify if balance showed is equal on MetaMasdk showed", async () => {
    render(
      <MetaMaskProvider>

      </MetaMaskProvider>
    )
  }) 
})