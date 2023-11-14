import Head from 'next/head';
import styles from '../styles/Main.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juliet Gobran</title>
        <link rel="icon" href="memoji.svg" />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>
          Juliet Gobran
        </h1>

        <div className={styles.code}>
          <u>Hello World!</u> Welcome to a curation of things I've created!
        </div>

        <div className={styles.grid}>
          <a href="/ui" className={styles.card}>
            <h3>UI / UX &rarr;</h3>
            <p>Focused on Human Interface Guidelines & native components, I aim for intuitive design patterns.</p>
          </a>
          <a href="/graphics" className={styles.card}>
            <h3>Graphic Design & Illustration &rarr;</h3>
            <p>From logos to posters, the <strong>Brand Identity</strong> is always at the core.</p>
          </a>
          <a href="/motion" className={styles.card}>
            <h3>Motion Graphics &rarr;</h3>
            <p>Motion brings a brand or idea to life, exciting the viewer.</p>
          </a>
          <a href="https://github.com/juliet-gobran"
            target="_blank"
            rel="noopener noreferrer" className={styles.card}>
            <h3>Git Hub ↗</h3>
            <p>Take a look at my projects - including this website!</p>
          </a>

        </div>

      </div>

      <div className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/juliet-gobran/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.svg" alt="Linkedin Logo" className={styles.logo} />
          {' '}Connect with me
        </a>
      </div>
    </div>
  );
}
