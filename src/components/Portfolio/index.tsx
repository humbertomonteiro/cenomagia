import styles from "./Portfolio.module.css";

import imgEvent1 from "../../assets/events/event1.jpg";
import imgEvent2 from "../../assets/events/event2.jpg";
import imgEvent3 from "../../assets/events/event3.jpg";
import imgEvent4 from "../../assets/events/event4.jpg";
import imgEvent5 from "../../assets/events/event5.jpg";
import imgEvent6 from "../../assets/events/event6.jpg";

export default function Portfolio() {
  const events = [
    {
      id: 1,
      image: imgEvent1,
      title: "Mucuripe Fortal",
      desc: "Espaço VIP e de destaque dentro do evento musical Fortals.",
    },
    {
      id: 2,
      image: imgEvent2,
      title: "Mucuripe Fortal",
      desc: "Espaço VIP e de destaque dentro do evento musical Fortals.",
    },
    {
      id: 3,
      image: imgEvent3,
      title: "Cumbuco Weekend",
      desc: " Festival de música realizado na praia do Cumbuco, que mistura diversos estilos musicais em um final de semana de festa.",
    },
    {
      id: 4,
      image: imgEvent4,
      title: "Cumbuco Weekend",
      desc: "Festival de música realizado na praia do Cumbuco, que mistura diversos estilos musicais em um final de semana de festa.",
    },
    {
      id: 5,
      image: imgEvent5,
      title: "Bloquinho Verão",
      desc: "Festa de música e pré-carnaval que acontece em Fortaleza.",
    },
    {
      id: 6,
      image: imgEvent6,
      title: "Cumbuco Weekend",
      desc: "Festival de música realizado na praia do Cumbuco, que mistura diversos estilos musicais em um final de semana de festa.",
    },
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nosso Portfólio</h2>
        <p className={styles.subtitle}>
          Cada evento conta uma história — e nós ajudamos a construir a
          atmosfera perfeita para ela acontecer.
        </p>

        <div className={styles.grid}>
          {events.map((event) => (
            <div key={event.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={event.image} alt={event.title} />
                <div className={styles.overlay}>
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
