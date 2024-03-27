import ClientProvider from "./ClientProvider"
import MetaMaskProvider from "./MetamaskProvider/index.tsx"
import PageScrollDirectionProvider from "./ScrollDirectionProvider.tsx"
import LanguageProvider from "./LanguageProvider/LanguageProvider.tsx"

interface Props extends React.PropsWithChildren {}
export default function Providers({ children }: Props) {
  return (
    <LanguageProvider>
      <ClientProvider>
        <PageScrollDirectionProvider>
          <MetaMaskProvider>{children}</MetaMaskProvider>
        </PageScrollDirectionProvider>
      </ClientProvider>
    </LanguageProvider>
  )
}
