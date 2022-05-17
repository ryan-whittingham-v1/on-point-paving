import styles from '../styles/MenuButton.module.css';

export default function MenuButton() {
  return (
    <div className={styles.mainContainer}>
      <button>
        <div className={styles.rectangle}></div>
        <div className={styles.rectangle}></div>
        <div className={styles.rectangle}></div>
      </button>
    </div>
  );
}
