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
  const {
    sdk,
    balance: balanceHashed,
    account,
    ...otherProperties
  } = useMetaMaskSDK()

  const { data: balance } = useQuery({
    queryKey: account,
    refetchOnWindowFocus: false,
    initialData: 0,
    placeholderData: 0,
    queryFn: async () => await getEthereumBalance(balanceHashed),
  })

  const connectWithMetamask = useCallback(() => {
    return sdk?.connect()
  }, [sdk])

  const disconnectWithMetamask = useCallback(() => {
    sdk?.terminate()
    window.localStorage.clear()
  }, [sdk])

  return {
    connectWithMetamask,
    disconnectWithMetamask,
    account,
    balance,
    sdk,
    ...otherProperties
  }
}
