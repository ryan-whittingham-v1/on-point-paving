import Head from 'next/head';
import styles from '../styles/About.module.css';
import Image from 'next/image';

import photo from '../public/driveway.jpg';

export default function About() {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>On Point Paving</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.headingContainer}>
          <h1>ABOUT US</h1>
        </div>
        <div className={styles.body}>
          <div className={styles.photo}>
            <Image
              alt="Freshly paved road with beautiful landscaping"
              src={photo}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className={styles.mainText}>
            On Point Paving is proud to offer high quality paving options for
            both commerical and residential projects. Our trusted experience and
            expertise will get the job done right at an affordable price. We are
            committed to providing exceptional paving solutions that will stand
            the test of time.
          </p>
        </div>
      </main>
    </div>
  );
}
