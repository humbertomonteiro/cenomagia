import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../infra/firebase/config";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import logo from "../../assets/cenomagia.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert("Credenciais inválidas");
    }
  };

  return (
    <section className={styles.login}>
      <div className={styles.overlay}></div>

      <div className={styles.card}>
        <img src={logo} alt="Logo Cenomagia" className={styles.logo} />

        <h2 className={styles.title}>Painel Administrativo</h2>
        <p className={styles.subtitle}>
          Acesse com suas credenciais para gerenciar os contatos recebidos.
        </p>

        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@email.com"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Entrar
          </button>
        </form>

        <footer className={styles.footer}>
          <span>
            © {new Date().getFullYear()} Cenomagia — Todos os direitos
            reservados
          </span>
        </footer>
      </div>
    </section>
  );
}
