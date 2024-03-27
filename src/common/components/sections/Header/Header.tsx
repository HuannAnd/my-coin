import metamaskLogo from "@/assets/metamask-logo.png"
import confettiEmoji from "@/assets/confetti-emoji.png"
import ethereumLogo from "@/assets/ethereum-logo.png"

import styles from "./Header.module.css"

import gsap from "gsap"

import { useCallback, useEffect, useState } from "react"
import useLenisScroll from "@/common/hooks/useLenisScroll"
import useMetamask from "@/common/hooks/useMetaMask"

import SlideUpLineOnTriggerOver from "@/common/components/atoms/SlideUpLineOnTriggerOver"

import { MetaMaskAvatar } from "react-metamask-avatar"
import getConnectionStatus from "@/common/utils/get-connection-status"
import { MetamaskConnectionStatusEnum } from "@/common/enums/MetamskEnums"
import BodyManager from "@/common/utils/BodyManager"

import HeaderAnimations from "./Header.animation"

const BASE_ANIMATION_DURATION = 1.1

export default function Header() {
  console.log("Header was render")

  const [message, setMessage] = useState("Connect With")
  const {
    account,
    connected,
    connecting,
    balance,
    connectWithMetamask,
    disconnectWithMetamask,
  } = useMetamask()
  const lenis = useLenisScroll()

  const connectionStatus = getConnectionStatus(connected, connecting)

  useEffect(
    function connectedWithSuccess() {
      const timeline = gsap.timeline({
        defaults: { ease: "power4.out", duration: BASE_ANIMATION_DURATION },
      })

      if (connected) {
        setMessage("")
        timeline.set(`.${styles.innerIcon}`, {
          attr: {
            src: confettiEmoji,
          },
          y: "0%",
        })

        timeline
          .to(`.${styles.innerIcon}`, {
            y: "-120%",
            delay: 1,
          })
          .set(`.${styles.innerIcon}`, {
            y: "120%",
            attr: {
              src: metamaskLogo,
            },
            onComplete: () => {
              BodyManager.setMetamaskConnectionStatus(
                MetamaskConnectionStatusEnum.CONNECTED
              )
              setMessage(account!)
            },
          })
      }

      return () => {
        BodyManager.setMetamaskConnectionStatus(
          MetamaskConnectionStatusEnum.WAITING
        )
        timeline.kill()
      }
    },
    [connected, account]
  )

  const handleOnConnectWithMetaMask = useCallback(async () => {
    try {
      lenis?.stop()
      await connectWithMetamask()
      lenis?.start()
    } catch (error) {
      lenis?.start()
      console.error(error)
    }
  }, [connectWithMetamask, lenis])

  return (
    <HeaderAnimations>
      <header className={styles.header}>
        <button className={styles.bar}>
          <img
            className={styles.ethereumLogo}
            src={ethereumLogo}
            alt="Ethreum icon"
          />
          <svg
            className={styles.dropdownArrow}
            height="36"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 9L15 13L11 17"
              stroke="white"
              transform="rotate(90)"
              transform-origin="13 13"
            />
          </svg>
        </button>
        <span className={styles.bar}>{balance} ETH</span>
        <SlideUpLineOnTriggerOver.Root>
          <button
            disabled={connected}
            onClick={
              account && connected
                ? handleOnConnectWithMetaMask
                : disconnectWithMetamask
            }
            className={styles.connectWithMetamask}
            data-metamask-connection-status={connectionStatus}
          >
            <span className={styles.innerText}>{message}</span>
            <div className={styles.circle}>
              {account ? (
                <MetaMaskAvatar
                  className={styles.avatar}
                  address={account}
                  size={24}
                />
              ) : null}
              <SlideUpLineOnTriggerOver.Trigger>
                <img
                  className={styles.innerIcon}
                  src={metamaskLogo}
                  alt="Connect with Metamask.innerIcon logo"
                />
              </SlideUpLineOnTriggerOver.Trigger>
            </div>
          </button>
        </SlideUpLineOnTriggerOver.Root>
      </header>
    </HeaderAnimations>
  )
}
