import Head from 'next/head';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Minimal Black & White</title>
        <meta name="description" content="Elegant black and white theme" />
      </Head>
      
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>MINIMAL</h1>
          <p className={styles.subtitle}>Black &amp; White Aesthetic</p>
        </header>
        
        <section className={styles.content}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Simplicity</h2>
            <p className={styles.cardText}>
              The essence of minimal design lies in stripping away the unnecessary, 
              focusing only on what truly matters.
            </p>
          </div>
          
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Contrast</h2>
            <p className={styles.cardText}>
              Black and white creates the ultimate contrast, emphasizing form, 
              structure, and content without distraction.
            </p>
          </div>
          
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Timeless</h2>
            <p className={styles.cardText}>
              This aesthetic never goes out of style. It&apos;s as relevant today 
              as it was decades ago, and will remain so.
            </p>
          </div>
        </section>
        
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Minimal Design Co.</p>
        </footer>
      </main>
    </>
  );
}
