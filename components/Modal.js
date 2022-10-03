import styles from '../styles/Modal.module.css';

export default function Modal(props) {
  return (
    <div className={styles.mainContainer} onClick={props.toggle}>
      <div className={styles.imageContainer}>{props.image}</div>
    </div>
  );
}
