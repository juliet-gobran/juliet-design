import Head from 'next/head';
import styles from '../styles/Main.module.css';

export default function Motion() {
    return (
        <div>
            <Head>
                <title>JG - Motion Graphics </title>
                <link rel="icon" href="memoji.svg" />
            </Head>
            <div className={styles.containerWide}>
                <a href="./" className={styles.back}>← Back </a>
            </div>
            <div className={styles.container}>
                <div className={styles.code}>Motion Graphics</div>
                <div className={styles.blog}>
                    <div className={styles.item}>
                        <video controls autoPlay muted width="100%">
                            <source src="ModularBankingAtWestpac.mp4" type="video/mp4" />
                        </video>
                        <div className={styles.text}>
                            <h3>Modular Banking</h3>
                            <hr />
                            <p>With a <strong>highly captivating</strong> use of audio & visuals, Modular Banking is explained. </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <video controls autoPlay muted width="100%">
                            <source src="MessageCentre-Westpac.mp4" type="video/mp4" />
                        </video>
                        <div className={styles.text}>
                            <h3>Message Centre</h3>
                            <hr />
                            <p>Leaning on the effects of the Modular Banking Video, a new module is introduced in a <strong>playful & informative way</strong>. </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <video controls autoPlay muted width="100%">
                            <source src="EE-Animation.mp4" type="video/mp4" />
                        </video>
                        <div className={styles.text}>
                            <h3>Elicit Era</h3>
                            <hr />
                            <p>From <strong>static to transformative</strong>, this short animation conveys the brands alluring message. </p>
                        </div>
                    </div>
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
    )
}