import ClientProvider from "./ClientProvider"
import MetaMaskProvider from "./MetamaskProvider/index.tsx"
import PageScrollDirectionProvider from "./ScrollDirectionProvider.tsx"

interface Props extends React.PropsWithChildren {}
export default function Providers({ children }: Props) {
  return (
    <ClientProvider>
      <PageScrollDirectionProvider>
        <MetaMaskProvider>{children}</MetaMaskProvider>
      </PageScrollDirectionProvider>
    </ClientProvider>
  )
}
