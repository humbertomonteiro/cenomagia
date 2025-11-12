import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Hero.module.css";
import logo from "../../assets/cenomagia.png";
import Button from "../shared/Button";

// imagens do fundo
import img1 from "../../assets/events/event1.jpg";
import img2 from "../../assets/events/event2.jpg";
import img3 from "../../assets/events/event3.jpg";
import img4 from "../../assets/events/event4.jpg";
import img5 from "../../assets/events/event5.jpg";

const images = [img1, img2, img3, img4, img5];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero} id="home">
      {/* Fundo animado */}
      <div className={styles.backgroundContainer}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles.bgSlide} ${
              index === currentImage ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className={styles.backgroundOverlay}></div>
      </div>

      {/* Conteúdo */}
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {/* <div className={styles.badge}>
            <span>✨ Como nasceu a Cenomagia</span>
          </div> */}

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
            <Button
              variant="primary"
              href="https://wa.me/5585982222739"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar Orçamento
            </Button>
            <Button variant="outline" href="#portfolio">
              Ver Portfólio
            </Button>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <img src={logo} alt="Logo Cenomagia" />
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <FaChevronDown className={styles.scrollIcon} />
      </div>
    </section>
  );
}
