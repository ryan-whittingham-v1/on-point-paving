import { fetchEntry, fetchReviews } from '../lib/contentful';

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Reviews from '../components/Reviews';

export default function Home(props) {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>On Point Paving - Vancouver, WA - Portland, OR</title>
        <meta
          name="description"
          content="Professional paving service for Vancouver, Washington and the Portland metro area."
          key="desc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.mainPhoto}>
          <Image
            alt={`https:${props?.homePage.fields?.image?.fields.description}`}
            src={`https:${props?.homePage.fields?.image?.fields.file.url}?w=1000&h=1000`}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 42%"
            priority
          />
        </div>
        <div className={styles.tagline}>
          <h1>
            {props?.homePage.fields.headingLine1}
            <br />
            {props?.homePage.fields.headingLine2}
          </h1>
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
