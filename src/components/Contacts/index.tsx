import styles from "./Contact.module.css";
import { useState } from "react";
import Button from "../shared/Button";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../infra/firebase/config";

import {
  FaInstagram,
  // FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      createdAt: serverTimestamp(),
    });

    alert("Mensagem enviada com sucesso!");
  };

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
              <span>(85) 98222-2739</span>
            </div>
            <div className={styles.infoItem}>
              <a
                href="https://instagram.com/cenomagia"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className={styles.icon} />
                <span>cenomagia</span>
              </a>
            </div>
          </div>

          {/* <div className={styles.socials}>
            <a
              href="https://instagram.com/cenomagia"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          </div> */}
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@email.com"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
