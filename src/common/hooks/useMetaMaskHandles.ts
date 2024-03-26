import { useSDK as useMetaMaskSDK } from "@metamask/sdk-react"
import {
  useCallback,
  useEffect as useHandleSDKStatusEvent,
  useLayoutEffect,
  useState,
} from "react"
import useLenisScroll from "./useLenisScroll"
import { useQuery } from "react-query"
import getEthereumBalance from "../utils/getEthreumBalance/getEthereumBalance"

export default function useMetaMaskHandles() {
  const [isInstalled, setIsInstalled] = useState<boolean>()
  const {
    sdk,
    status,
    balance: balanceHashed,
    provider,
    account,
  } = useMetaMaskSDK()
  const lenis = useLenisScroll()

  const { data: balance } = useQuery({
    queryKey: account,
    initialData: 0,
    placeholderData: 0,
    queryFn: async () => await getEthereumBalance(balanceHashed),
  })

  useLayoutEffect(function verifiyingMetamaskIsInstalled() {
    setIsInstalled(typeof window.ethereum !== "undefined")
  }, [])

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
    balance,
  }
}
