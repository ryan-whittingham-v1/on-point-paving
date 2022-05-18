import styles from '../styles/Reviews.module.css';
import Review from './Review';

export default function Reviews() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <h2>PAVING THE WAY IN CUSTOMER SATISFACTION</h2>
        <div className={styles.rectangle}></div>
      </div>
      <Review />
    </div>
  );
}
