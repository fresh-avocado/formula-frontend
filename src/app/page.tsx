import Main from "@/components/Main";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.flexContainer}>
      <h1 className="text-center p-2">Visor Carreras por Constructor de F1</h1>
      <Main />
    </main>
  );
}
