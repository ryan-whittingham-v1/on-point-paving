import styles from '../styles/Notification.module.css';

export default function Notification(props) {
  return <div className={styles.mainContainer}>* {props.children}</div>;
}
