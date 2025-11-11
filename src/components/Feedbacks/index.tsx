import styles from "./Feedbacks.module.css";
import feedback1 from "../../assets/feedbacks/feedback1.jpeg";
import feedback2 from "../../assets/feedbacks/feedback2.jpeg";
import feedback3 from "../../assets/feedbacks/feedback3.jpeg";
import Button from "../shared/Button";

export default function Feedbacks() {
  const images = [feedback1, feedback3, feedback2];

  return (
    <section className={styles.feedbacks} id="feedbacks">
      <div className={styles.container}>
        <h2 className={styles.title}>O que nossos clientes dizem</h2>
        <p className={styles.subtitle}>
          Feedbacks reais de quem já viveu a experiência Cenomagia.
        </p>

        <div className={styles.grid}>
          {images.map((img, i) => (
            <div key={i} className={styles.card}>
              <img src={img} alt={`Feedback ${i + 1}`} />
            </div>
          ))}
        </div>

        <Button
          variant="secondary"
          href="https://wa.me/5585982222739"
          target="_blank"
          rel="noreferrer"
        >
          Fazer um orçamento
        </Button>
      </div>
    </section>
  );
}
