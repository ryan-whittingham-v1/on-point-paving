import styles from '../styles/image.module.css';

export default function Image(props) {
  return (
    <div className={styles.mainContainer}>
      {props.zoom && (
        <div className={styles.modalContainer} onClick={props.closeZoom}>
          <img src={props.src} alt={props.alt} loading="lazy" />
        </div>
      )}
      <div className={styles.imageContainer}>
        <img
          src={props.src}
          alt={props.alt}
          loading="lazy"
          onClick={props.handleZoom}
        />
      </div>
    </div>
  );
}
