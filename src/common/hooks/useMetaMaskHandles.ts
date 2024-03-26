import { useSDK as useMetaMaskSDK } from "@metamask/sdk-react"
import { useEffect, useEffect as useHandleSDKStatusEvent, useLayoutEffect, useState } from "react"
import useLenisScroll from "./useLenisScroll"

export default function useMetaMaskHandles() {
  const [isInstalled, setIsInstalled] = useState<boolean | null>(null)
  const { sdk, status } = useMetaMaskSDK()
  const lenis = useLenisScroll()

  useLayoutEffect(function verifiyingMetamaskIsInstalled() {
    setIsInstalled(window.ethereum !== "undefined")
  } , [])

  console.log("Metamask instalattion is:", isInstalled)

  useHandleSDKStatusEvent(() => {
    const connectionStatus = status?.connectionStatus

    switch (connectionStatus) {
      case "timeout":
        lenis?.start()
        break
      case "waiting":
      default:
    }
  }, [status])

  function handleConnect() {
    return sdk?.connect()
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
