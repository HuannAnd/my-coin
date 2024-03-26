import styles from "./Menu.module.css"

import getMetamaskConnectionStatus from "@/common/utils/get-connection-status"

import { useSDK as useMetamask } from "@metamask/sdk-react"

interface Props extends React.PropsWithChildren {
  
}

export default function Menu() {
  const {connecting, connected} = useMetamask()

  const connectionStatus = getMetamaskConnectionStatus(connected, connecting)

  return(
    <div className={styles.menu}>


    </div>
  )
}