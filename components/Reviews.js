import { useEffect, useState } from 'react';
import styles from '../styles/Reviews.module.css';
import Review from './Review';

export default function Reviews(props) {
  const duration = 400;

  const [reviews, setReviews] = useState(props?.reviews);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [array, setArray] = useState(['']);

  let buttonStyle;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  let review = <Review review={reviews[reviewIndex]} />;

  async function nextReview(index) {
    if (index !== reviewIndex) setArray(['']);
    await sleep(400);
    setReviewIndex(index);
  }

  useEffect(() => {
    setArray([review]);
  }, [reviewIndex]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <div className={styles.rectangle}></div>
        <h2>{props.header}</h2>
        <div className={styles.rectangle}></div>
      </div>
      <div className={styles.carousel}>
        <div className={styles.review}>{review}</div>
      </div>
    </div>
  );
}
