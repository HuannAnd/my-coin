import styles from "./Hero.module.css"

import CyanBlur from "./Blurs/CyanBlur/CyanBlur"
import MagentaBlur from "./Blurs/MagentaBlur/MagentaBlur"
import LightBlur from "./Blurs/LightBlur/LightBlur"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <MagentaBlur className={styles.magentaBlur} />
      <h1 className={styles.title}>ESPORTS WALLET</h1>
      <LightBlur className={styles.lightBlur} />
      <CyanBlur className={styles.cyanBlur} />
    </section>
  )
}
