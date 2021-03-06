import { fetchEntry, fetchReviews } from '../lib/contentful';

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Reviews from '../components/Reviews';

export default function Home(props) {
  const photo = `https:${props?.homePage.fields?.image?.fields.file.url}`;
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>On Point Paving</title>
        <meta name="description" content="On Point Paving Web Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.mainPhoto}>
          <Image
            alt="Freshly paved road with beautiful landscaping"
            src={photo}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 42%"
            priority
          />
        </div>
        <div className={styles.tagline}>
          <h2>{props?.homePage.fields.headingLine1}</h2>
          <h1>{props?.homePage.fields.headingLine2}</h1>
        </div>
        <p className={styles.mainText}>{props?.homePage.fields.textBody}</p>
      </main>
      <Reviews
        header={props?.homePage.fields.reviewsHeader}
        reviews={props?.reviews}
      />
    </div>
  );
}

export async function getStaticProps() {
  const homePage = await fetchEntry('39EhTHPUPTS9fqMLH9lIC7');
  const reviewsRes = await fetchReviews();
  const reviews = await reviewsRes.map((p) => {
    return p;
  });

  return {
    props: {
      homePage,
      reviews,
    },
  };
}
