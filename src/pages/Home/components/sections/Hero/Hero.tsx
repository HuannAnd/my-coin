import styles from "./Hero.module.css"

import HeroPageTransition from "./HeroPageTransition"

import CyanBlur from "./Blurs/CyanBlur/CyanBlur"
import MagentaBlur from "./Blurs/MagentaBlur/MagentaBlur"
import LightBlur from "./Blurs/LightBlur/LightBlur"

export default function Hero() {
  return (
    <HeroPageTransition>
      <section className={styles.hero}>
        <MagentaBlur className={styles.magentaBlur} />
        <h1 className={styles.title}>
          ESPORTS WALLET
          <span className={styles.mask}>ESPORTS WALLET</span>
        </h1>
        <LightBlur className={styles.lightBlur} />
        <CyanBlur className={styles.cyanBlur} />
      </section>
    </HeroPageTransition>
    )
}
