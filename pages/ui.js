import Head from 'next/head';
import styles from '../styles/Main.module.css';

export default function UI() {
    return (
        <div>
            <Head>
                <title>JG - UI / UX</title>
                <link rel="icon" href="memoji.svg" />
            </Head>
            <div className={styles.containerWide}>
                <a href="./" className={styles.back}>← Back </a>
            </div>
            <div className={styles.container}>
                <div className={styles.code}>UI / UX</div>
            </div>
        </div>

    )
}