import styles from "./About.module.css";

import event4 from "../../assets/events/event4.jpg";
import event5 from "../../assets/events/event5.jpg";
import event6 from "../../assets/events/event6.jpg";
import event7 from "../../assets/events/event7.jpg";
import event8 from "../../assets/events/event8.jpg";

import Carousel from "../shared/Carousel";
import Button from "../shared/Button";

export default function About() {
  const images = [event4, event5, event6, event7, event8];

  // Mapeamos as imagens e transformamos em React nodes (com <img>)
  const carouselItems = images.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Evento ${index + 1}`}
      className={styles.carouselImage}
    />
  ));

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Sobre a Cenomagia</h2>
          <p className={styles.description}>
            Na Cenomagia, acreditamos que cada evento tem o poder de contar uma
            história. Nossa missão é transformar sonhos em realidade através de
            cenografias criativas, detalhistas e cheias de emoção.
          </p>
          <p className={styles.description}>
            Unimos arte, técnica e tecnologia para criar experiências únicas que
            encantam e surpreendem. Cada projeto é uma nova oportunidade de
            despertar a imaginação e deixar uma marca memorável.
          </p>
          <Button variant="secondary">Conheça nossa equipe</Button>
        </div>

        <div className={styles.imageContainer}>
          <Carousel
            items={carouselItems}
            slidesPerView={1}
            autoplay
            delay={4000}
          />
        </div>
      </div>
    </section>
  );
}
