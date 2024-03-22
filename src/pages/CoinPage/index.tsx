import useMetamaskHandles from "@/common/hooks/useMetaMaskHandles"
import useCoin from "./hooks/useCoin"
import { useSDK as useMetaMask } from "@metamask/sdk-react"

export default function CoinPage() {
  const { account, balance, chainId, connected } = useMetaMask()
  const { handleConnect, handleDisconnect } = useMetamaskHandles()

  const coin = useCoin()

  return (
    <main>
      <h1>Coin route {coin?.id}</h1>
      <p>You are not connected</p>
      {connected ? (
        <button onClick={handleDisconnect}>Disconnect Account</button>
      ) : (
        <button onClick={handleConnect}>Connect Now</button>
      )}
      <p>My Balance {balance}</p>
      <p>My Account {account}</p>
      <p>My Chain {chainId}</p>
    </main>
  )
}
