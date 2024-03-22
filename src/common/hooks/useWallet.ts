import { useSDK as useMetaMaskSDK } from "@metamask/sdk-react"

export default function useWallet() {
  const { account, balance, chainId } = useMetaMaskSDK()

  return {
    account,
    balance,
    chainId,
  }
}
