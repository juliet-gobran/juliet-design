import Head from 'next/head';
import styles from '../styles/Main.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juliet Gobran</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://juliet-gobran.vercel.app/" />
        <meta property="og:title" content="Juliet Gobran - UX Engineer" />
        <meta property="og:image" content="Process.png" />
        <meta property="og:description" content="Discover my creations in design, motion & development!" />
        <link rel="icon" href="memoji.svg" />
      </Head>

      <div className={styles.navbar}>
        <a
          className={styles.navItem}
          href="/ui"
        >
          UX
        </a>
        <a
          className={styles.navItem}
          href="/graphics"
        >
          Graphic
        </a>
        <a
          className={styles.navItem}
          href="/motion"
        >
          Motion
        </a>
        <a
          href="https://www.linkedin.com/in/juliet-gobran/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.svg" alt="Linkedin Logo" className={styles.logo} />
        </a>
      </div>

      <div className={styles.main}>
        <h1 className={styles.title}>
          Juliet Gobran
        </h1>
        <div className={styles.code}>
          <a href="https://my.spline.design/room-bb19795e246187473b09c9bb8595e728/">Hello World!</a> Discover my creations in design, motion & development!
        </div>
        <div className={styles.videoContainer}>
          <video controls autoPlay muted width="100%">
            <source src="JulietGobran-2024_small2.mp4" type="video/mp4" />
          </video>
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
            <h3>GitHub ↗</h3>
            <p>Take a look at my projects - including this website!</p>
          </a>
        </div>
      </div>

      <div className={styles.footer}>
        <a
          className={styles.navItem}
          href="JulietGobran-CV-NOV-2024-compressed.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my resume
        </a>
      </div>
    </div>
  );
}
