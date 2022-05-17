import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import photo from '../public/Oregon-City-3-scaled.jpg';

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>On Point Paving</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainPhoto}>
        <Image
          alt=""
          src={photo}
          layout="fill"
          objectFit="contain"
          objectPosition="top"
          priority
        />
      </div>
      <div className={styles.tagline}>
        <h1>SOUTHWEST WASHINGTON’S ELITE PAVING SERVICE</h1>
      </div>
    </div>
  );
}
