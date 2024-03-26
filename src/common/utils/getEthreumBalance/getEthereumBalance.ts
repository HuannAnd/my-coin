export default async function getEthereumBalance(balance: string | undefined) {
  if(!balance) return 0
  const balanceHashed = await window.ethereum?.request<string>({
    method: "eth_getBalance",
    params: [balance, "latest"],
  })

  const balanceInWei = parseInt(balanceHashed!, 16)
  const balanceInEth = balanceInWei / 10 ** 18

  return balanceInEth
}
