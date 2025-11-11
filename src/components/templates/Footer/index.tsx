import styles from "./Footer.module.css";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import logo from "../../../assets/cenomagia.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo e descrição */}
        <div className={styles.brand}>
          <img src={logo} alt="Cenomagia Logo" className={styles.logo} />
          <p className={styles.description}>
            Transformando sonhos em cenários memoráveis. Cenografia, arte e
            experiência — tudo em um só lugar.
          </p>
        </div>

        {/* Links rápidos */}
        <div className={styles.links}>
          <h3>Links Rápidos</h3>
          <ul>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#portfolio">Portfólio</a>
            </li>
            {/* <li>
              <a href="#services">Serviços</a>
            </li> */}
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>

        {/* Contato e redes sociais */}
        <div className={styles.contact}>
          <h3>Contato</h3>
          <p>contato@cenomagia.com.br</p>
          <p>(85) 00000-0000</p>
          <div className={styles.socials}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>
          © {new Date().getFullYear()} Cenomagia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
