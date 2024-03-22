import { MetaMaskProvider as Provider } from "@metamask/sdk-react"

interface Props extends React.PropsWithChildren {}

const options: any = {
  dappMetadata: {
    name: "React dapp",
    url: window.location.href,
  },
}

export default function MetaMaskProvider({ children }: Props) {
  return (
    <Provider debug={false} sdkOptions={options}>
      {children}
    </Provider>
  )
}
