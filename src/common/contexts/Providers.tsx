import ClientProvider from "./ClientProvider"
import MetaMaskProvider from "./MetamaskProvider/index.tsx"

interface Props extends React.PropsWithChildren {}
export default function Providers({ children }: Props) {
  return (
    <ClientProvider>
      <MetaMaskProvider>{children}</MetaMaskProvider>
    </ClientProvider>
  )
}
