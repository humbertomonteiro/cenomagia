import { useEffect, useState } from "react";
import {
  FaBars,
  FaHome,
  FaInfo,
  FaPaperPlane,
  FaPhone,
  FaTimes,
} from "react-icons/fa";
import styles from "./Header.module.css";
import logo from "../../../assets/cenomagia.png";
import Button from "../../shared/Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <img src={logo} alt="Cenomagia logo" />
        </a>

        {/* Navegação desktop */}
        <nav className={styles.nav}>
          <a href="#home" className={styles.link}>
            Home
          </a>
          <a href="#about" className={styles.link}>
            Sobre
          </a>
          <a href="#portfolio" className={styles.link}>
            Portfólio
          </a>
          <a href="#contact" className={styles.link}>
            Contato
          </a>
        </nav>

        {/* Ícone mobile */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <a href="#home" onClick={closeMenu}>
          <FaHome /> Home
        </a>
        <a href="#about" onClick={closeMenu}>
          <FaInfo /> Sobre
        </a>
        <a href="#portfolio" onClick={closeMenu}>
          <FaPaperPlane /> Portfólio
        </a>
        <a href="#contact" onClick={closeMenu}>
          <FaPhone /> Contato
        </a>
        <div className={styles.btnCta}>
          <Button variant="secondary">Fazer Orçamento</Button>
        </div>
      </div>
    </header>
  );
}
