import { useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
interface Props extends React.PropsWithChildren {}

const client = new QueryClient()
export default function ClientProvider({ children }: Props) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
