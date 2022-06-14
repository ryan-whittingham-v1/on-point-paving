import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from '../styles/Reviews.module.css';
import Review from './Review';

export default function Reviews(props) {
  const duration = 400;

  const [reviews, setReviews] = useState(props?.reviews);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [array, setArray] = useState(['']);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  let review = (
    <CSSTransition timeout={duration} classNames={{ ...styles }}>
      <Review review={reviews[reviewIndex]} />
    </CSSTransition>
  );

  async function nextReview() {
    setArray(['']);
    await sleep(400);
    setReviewIndex((reviewIndex + 1) % reviews.length);
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
        <div className={styles.review}>
          <TransitionGroup>{array}</TransitionGroup>
        </div>
        <div className={styles.button}>
          <button type="button" onClick={nextReview}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
