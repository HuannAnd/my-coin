import ethereumLogo from "@/assets/ethereum-logo.jpg"
import baseFlag from "@/assets/brazil-flag.png"
import myProfileImage from "@/assets/ProfileAvatar.png"

import styles from "./Header.module.css"

import LeftEdge from "./LeftEdge/LeftEdge"
import RightEdge from "./RightEdge/RightEdge"

import ControlHeaderOnScroll from "./HeaderControllOnScrolling"

function Rovering() {
  return <svg width="100%" className={styles.covering} viewBox=""></svg>
}

export default function Header() {
  return (
    <ControlHeaderOnScroll>
      <header className={styles.header}>
        <div className={styles.left}>
          {/* <LeftEdge />
          <RightEdge /> */}
        </div>
        <div className={styles.right}>
          <LeftEdge className={styles.leftEdge}/>
          <div className={styles.language}>
            <img
              src={baseFlag}
              className={styles.flag}
              alt="Is a Country flag"
            />
            <small className={styles.country}>BRL</small>
          </div>
          <div className={styles.profile}>
            <svg
              className={styles.copyToClipboard}
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.67008 15.3146L0.417519 6.40214C0.18693 4.76141 1.33008 3.24441 2.97081 3.01382L7.21378 2.4175C8.85451 2.18692 10.3715 3.33006 10.6021 4.97079L11.8547 13.8832C12.0853 15.5239 10.9421 17.0409 9.30137 17.2715L5.0584 17.8678C3.41767 18.0984 1.90067 16.9553 1.67008 15.3146Z"
                stroke="#CCCCCC"
                stroke-width="0.75"
              />
              <path
                d="M7.5 12.5V3.5C7.5 1.84315 8.84315 0.5 10.5 0.5H15C16.6569 0.5 18 1.84315 18 3.5V12.5C18 14.1569 16.6569 15.5 15 15.5H10.5C8.84315 15.5 7.5 14.1569 7.5 12.5Z"
                fill="#EEEEEE"
                stroke="#CCCCCC"
                stroke-width="0.75"
              />
            </svg>
            <p className={styles.walletHashCode}>0x871d...</p>
            <div className={styles.account}>
              <img
                className={styles.ethereum}
                src={ethereumLogo}
                alt="Ethereum logo"
              />
              <img className={styles.avatar} src={myProfileImage} alt="" />
            </div>
          </div>
          <RightEdge className={styles.rightEdge} />
        </div>
      </header>
    </ControlHeaderOnScroll>
  )
}
