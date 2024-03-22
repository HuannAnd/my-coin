import { useSDK as useMetaMaskSDK } from "@metamask/sdk-react"

export default function useMetaMaskHandles() {
  const { sdk } = useMetaMaskSDK()

  function handleConnect() {
    return sdk?.connect()
    .then(() => {
      console.log("Connecting with succesful")
    })
    .catch(() => {
      console.warn("Failed to connext Metamask wallet...")
    })
  }

  function handleDisconnect() {
    sdk?.terminate()
    window.localStorage.clear()
  }

  return {
    handleConnect,
    handleDisconnect,
  }
}
