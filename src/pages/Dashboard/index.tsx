import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../infra/firebase/config";
import styles from "./Dashboard.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../infra/firebase/config";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt?: { seconds: number };
}

export default function Dashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      setContacts(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Contact[]
      );
    };

    fetchContacts();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const downloadPDF = () => {
    // Faz uma cópia ordenada por nome
    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" })
    );

    const doc = new jsPDF();
    doc.text("Relatório de Mensagens Recebidas", 14, 15);

    const tableData = sortedContacts.map((c) => [
      c.name,
      c.email,
      c.message,
      c.createdAt?.seconds
        ? new Date(c.createdAt.seconds * 1000).toLocaleString("pt-BR")
        : "—",
    ]);

    autoTable(doc, {
      head: [["Nome", "E-mail", "Mensagem", "Data"]],
      body: tableData,
      startY: 25,
    });

    doc.save("mensagens-recebidas.pdf");
  };

  const downloadExcel = () => {
    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" })
    );

    const data = sortedContacts.map((c) => ({
      Nome: c.name,
      Email: c.email,
      Mensagem: c.message,
      Data: c.createdAt?.seconds
        ? new Date(c.createdAt.seconds * 1000).toLocaleString("pt-BR")
        : "—",
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Mensagens");

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(blob, "mensagens-recebidas.xlsx");
  };

  return (
    <section className={styles.dashboard}>
      <header className={styles.header}>
        <h1 className={styles.title}>Painel Administrativo</h1>

        <div className={styles.actions}>
          <button onClick={downloadPDF} className={styles.exportBtn}>
            📄 Baixar PDF
          </button>
          <button onClick={downloadExcel} className={styles.exportBtn}>
            📊 Baixar Excel
          </button>
          <button onClick={handleLogout} className={styles.logout}>
            Sair
          </button>
        </div>
      </header>

      <div className={styles.container}>
        <h2 className={styles.subtitle}>Mensagens Recebidas</h2>

        {contacts.length === 0 ? (
          <p className={styles.empty}>Nenhuma mensagem recebida ainda.</p>
        ) : (
          <ul className={styles.list}>
            {contacts.map((c) => (
              <li key={c.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>{c.name}</h3>
                  <span className={styles.date}>
                    {c.createdAt?.seconds
                      ? new Date(c.createdAt.seconds * 1000).toLocaleDateString(
                          "pt-BR",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )
                      : "—"}
                  </span>
                </div>
                <p className={styles.email}>{c.email}</p>
                <p className={styles.message}>{c.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
