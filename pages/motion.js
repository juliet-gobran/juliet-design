import Head from 'next/head';
import styles from '../styles/Main.module.css';

export default function Motion() {
    return (
        <div className={styles.container}>
            <Head>
                <title>JG - UI / UX</title>
                <link rel="icon" href="memoji.svg" />
            </Head>
            <a href="./">Back</a>
            <>Hi</>
        </div>
    )
}