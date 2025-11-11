// Hero.tsx
import { FaChevronDown } from "react-icons/fa";
import styles from "./Hero.module.css";
import logo from "../../assets/cenomagia.png";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span>✨ Como nasceu a Cenomagia</span>
          </div>

          <h1 className={styles.title}>
            Transformando <span className={styles.highlight}>sonhos</span> em
            <span className={styles.highlight}> cenários</span> memoráveis
          </h1>

          <p className={styles.description}>
            A Cenomagia nasceu do desejo de transformar sonhos em cenários e
            ideias em experiências reais. Combinamos criação, execução e
            tecnologia para entregar experiências marcantes, seguras e cheias de
            personalidade.
          </p>

          <div className={styles.ctaButtons}>
            <Button variant="primary">Solicitar Orçamento</Button>
            <Button variant="outline" href="#portfolio">
              Ver Portfólio
            </Button>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <img src={logo} alt="Logo Cenomagia" />
          <div className={styles.floatingElement}></div>
          <div className={styles.floatingElement}></div>
          <div className={styles.floatingElement}></div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <FaChevronDown className={styles.scrollIcon} />
      </div>
    </section>
  );
}
