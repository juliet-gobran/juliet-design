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
                <div className={styles.blog}>
                    <div className={styles.item}>
                        <img src="WestpacApp.png" alt="Westpac Banking App" />
                        <div className={styles.text}>
                            <a href="https://www.westpac.com.au/personal-banking/online-banking/ways-to-bank/mobile-banking/?cid=wc:EDB:TRANS-H2_2007:sem:goog:_westpac%20banking%20app_e:choi:bra&gad_source=1&gclid=Cj0KCQiApOyqBhDlARIsAGfnyMohEJCYf2tmSnxk5Xhy4lZmQuAJOK7vWI79D08nAc_inemU7VQDaegaAgd8EALw_wcB&gclsrc=aw.ds"
                                target="_blank"
                                rel="noopener noreferrer">
                                <h3>Westpac Banking App ↗</h3>
                            </a>
                            <hr />
                            <p>Named Australia's <strong>#1 Banking App</strong>, the Westpac banking experience is built from a strong design system and component library. Being apart of the most recent launch of the Personal Finance Management (PFM) capabilities, I witnessed the intense innovation on our design system to make such complex & elegant features. Playing a role in the development of this app's success is a highlight. </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.mediaGrid}>
                            <img src="Chopper-Spacers.gif" alt="Chopper - Component Library" />
                            <img src="Chopper-Text.gif" alt="Chopper - Component Library" />
                        </div>
                        <div className={styles.text}>
                            <h3>Chopper</h3>
                            <hr />
                            <p>Chopper is an <strong>internal developer tool</strong>, designed to host every built component in the Westpac app. Bridging the gap from design to code, Chopper provides a single source of truth that helps determine feasibility & speed up the handover process.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="Sprout.png" alt="Sprout App" />
                        <div className={styles.text}>
                            <h3>Sprout</h3>
                            <hr />
                            <p>Sprout helps people find their green thumb! The simple onboarding experience creates a <strong>user centred</strong> application, providing users with a more personal & customizable experience.</p>
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