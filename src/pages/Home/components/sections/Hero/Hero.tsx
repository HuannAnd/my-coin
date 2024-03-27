import ethereumSceneMockup from "@/assets/EthereumScene.png"

import GradientBlur from "@/common/components/molecules/GridBlurred/GridBlurred"

import styles from "./Hero.module.css"

import HeroPageTransition from "./HeroPageTransition.animation"
import Title from "../../atoms/Title/Title"

export default function Hero() {
  return (
    <HeroPageTransition>
      <section className={styles.hero}>
        <div className="container">
          <img
            className={styles.ethereumSceneMockup}
            src={ethereumSceneMockup}
            alt="Mockup Ethereum Scene"
          />
          <Title className={styles.title} />
          <p className={styles.scrollDown}>SCROLL DOWN</p>
        </div>
        <GradientBlur className={styles.gradientBlur} />
      </section>
    </HeroPageTransition>
  )
}
