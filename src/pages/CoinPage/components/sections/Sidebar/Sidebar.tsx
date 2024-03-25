import styles from "./Sidebar.module.css"

import { ICoin } from "@/services/responses/CoinGeckoResponses"

interface Props extends Partial<ICoin> {}

interface RootProps extends React.PropsWithChildren {}

function Root({children}: RootProps) {
  return (
    <aside className={styles.sidebar}>
      {children}
    </aside>
  )
}
interface TopProps extends React.HTMLAttributes<HTMLDivElement> {}

function Top({ children }: TopProps) {
  <div className={`${styles.top}`}>{children}</div>
}

const Sidebar = {
  Root,
  Top,
}

export default Sidebar
