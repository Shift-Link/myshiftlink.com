import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shift Link</title>
        <meta name="description" content="Shift Link coming soon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Shift Link Coming Soon!</h1>
      </main>
    </div>
  );
}
