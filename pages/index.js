import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juliet Gobran</title>
        <link rel="icon" href="memoji.svg" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Juliet Gobran
        </h1>

        <code>
          Welcome to a curation of things I've designed!
        </code>
      </main>
      <footer>
        <a
          href="https://github.com/juliet-gobran"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.svg" alt="Github Logo" className={styles.logo} />
          {' '}I also build stuff
        </a>
        <a
          href="https://www.linkedin.com/in/juliet-gobran/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.svg" alt="Linkedin Logo" className={styles.logo} />
          {' '}Connect with me
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;

        }
        footer img {
          margin-right: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
          padding: 8px;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
