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
      </header>
    </ControlHeaderOnScroll>
  )
}
