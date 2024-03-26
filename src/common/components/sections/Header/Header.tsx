import metamaskLogo from "@/assets/metamask-logo.png"
import confettiEmoji from "@/assets/confetti-emoji.jpg"

import styles from "./Header.module.css"

import gsap from "gsap"

import { useCallback, useEffect } from "react"
import useLenisScroll from "@/common/hooks/useLenisScroll"
import useMetaMaskHandles from "@/common/hooks/useMetaMaskHandles"
import { useSDK as useMetamask } from "@metamask/sdk-react"

import SlideUpLineOnTriggerOver from "@/common/components/atoms/SlideUpLineOnTriggerOver"

import HeaderAnimations from "./Header.animation"
import getConnectionStatus from "@/common/utils/get-connection-status"
// import CoinBar from "@/common/components/atoms/CoinBar/CoinBar"

const BASE_ANIMATION_DURATION = 1.1

export default function Header() {
  const { handleConnect, handleDisconnect } = useMetaMaskHandles()
  const { account, connected, connecting } = useMetamask()
  const lenis = useLenisScroll()

  const connectionStatus = getConnectionStatus(connected, connecting)

  useEffect(
    function connectedWithSuccess() {
      if (connected) {
        const timeline = gsap.timeline({
          defaults: { ease: "power4.out", duration: BASE_ANIMATION_DURATION },
        })

        timeline.set(`.${styles.fox}`, {
          attr: {
            src: confettiEmoji
          },
          y: "0%",
        })
        timeline.set(`.${styles.connectWithMetamask}`, {
          backgroundColor: "#ff0000",
        })

        timeline
          .to(`.${styles.fox}`, {
            y: "-120%",
          })
          .set(`.${styles.fox}`, {
            y: "120%",
            attr: {
              src: "",
            },
          })
          .to(`.${styles.fox}`, {
            y: "0%",
          })
        timeline.to(`.${styles.connectWithMetamask}`, {})
      }
    },
    [connected]
  )

  const handleOnConnect = useCallback(async () => {
    try {
      lenis?.stop()
      const response = await handleConnect()
      console.log("Connection Response", response)
      lenis?.start()
    } catch (error) {
      lenis?.start()
      throw new Error("EXCEPTION ON CLIENT")
    }
  }, [handleConnect, lenis])

  const handleOnLogout = useCallback(() => {
    handleDisconnect()
  }, [handleDisconnect])

  return (
    <HeaderAnimations>
      <header className={styles.header}>
        <SlideUpLineOnTriggerOver.Root>
          {/* {isLogged ? <CoinBar name="ethereum" symbol="ETH" image="https:localhost:3000/some-url" /> : null} */}
          <button
            disabled={connected}
            onClick={account && connected ? handleOnLogout : handleOnConnect}
            className={styles.connectWithMetamask}
            data-metamask-connection-status={connectionStatus}
          >
            <span className={styles.innerText}>
              {connected ? account : "Connect With"}
            </span>
            <div className={styles.circle}>
              <SlideUpLineOnTriggerOver.Trigger>
                <img
                  className={styles.fox}
                  src={metamaskLogo}
                  alt="Connect with Metamask fox logo"
                />
              </SlideUpLineOnTriggerOver.Trigger>
            </div>
          </button>
        </SlideUpLineOnTriggerOver.Root>
      </header>
    </HeaderAnimations>
  )
}
