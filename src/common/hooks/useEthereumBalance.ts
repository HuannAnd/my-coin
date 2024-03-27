import { useSDK } from "@metamask/sdk-react"
import { useQuery } from "react-query"
import getEthereumBalance from "../utils/getEthreumBalance/getEthereumBalance"

export default function useEthereumBalance() {
  const {balance} = useSDK()

  const {data} = useQuery({
    queryKey: balance,
    refetchOnWindowFocus: false,
    queryFn: () => () => getEthereumBalance(balance)
  })

  return balance
}