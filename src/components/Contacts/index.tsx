import Button from "../shared/Button";
import styles from "./Contact.module.css";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Entre em Contato</h2>
          <p className={styles.subtitle}>
            Vamos transformar suas ideias em um cenário memorável. Fale com a
            nossa equipe e solicite um orçamento personalizado.
          </p>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.icon} />
              <span>contato@cenomagia.com.br</span>
            </div>
            <div className={styles.infoItem}>
              <FaWhatsapp className={styles.icon} />
              <span>(85) 00000-0000</span>
            </div>
          </div>

          <div className={styles.socials}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Seu nome completo" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="seuemail@email.com" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              placeholder="Descreva seu evento..."
              rows={4}
            ></textarea>
          </div>
          <Button variant="secondary" type="submit">
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  );
}
