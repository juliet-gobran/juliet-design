import Head from 'next/head';
import styles from '../styles/Main.module.css';

export default function Graphic() {
    return (
        <div>
            <Head>
                <title>JG - Graphic Design </title>
                <link rel="icon" href="memoji.svg" />
            </Head>
            <div className={styles.containerWide}>
                <a href="./" className={styles.back}>← Back </a>
            </div>
            <div className={styles.container}>
                <div className={styles.code}>Graphic Design & Illustration</div>
                <div className={styles.blog}>
                    <div className={styles.item}>
                        <img src="THESEWINGCOLLECTIVE.png" alt="The Sewing Collective Brand Identity" />
                        <div className={styles.text}>
                            <a
                                href="https://the-sewing-collective.com.au/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <h3>The Sewing Collective ↗</h3>
                            </a>
                            <hr />
                            <p>With <strong>playful colour & inviting fonts</strong>, the design for this brand aims to invite like-minded creatives to the community.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="EE.png" alt="Elicit Era - Branding" />
                        <div className={styles.text}>
                            <h3>Elicit Era</h3>
                            <hr />
                            <p>For a community of <strong>moon lovers & creative minds</strong>, Elicit Era was carefully created with the intent to feel 'witchy' & 'mysterious'.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="MarigoldMedia.png" alt="Marigold Media Branding" />
                        <div className={styles.text}>
                            <a
                                href="https://marigoldmedia.squarespace.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <h3>Marigold Media ↗</h3>
                            </a>
                            <hr />
                            <p>With <strong>earthy tones & a foral symbol</strong>, Marigold Media reflects the brands visions for telling stories in a raw & honest way.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="Illustrations.png" alt="Illustrations" />
                        <div className={styles.text}>
                            <h3>Illustrations</h3>
                            <hr />
                            <p>Visualising words turns <strong>a phrase into a mantra</strong>. These illustations inspire & excite the mind.</p>
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