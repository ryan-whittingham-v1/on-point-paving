import Image from 'next/image';

import styles from '../styles/Service.module.css';
import ImageViewer from './ImageViewer';

export default function Service(props) {
  console.log(props);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headingContainer}>
        <div className={styles.rectangle}></div>

        <h2>{props.serviceName}</h2>
        <div className={styles.rectangle}></div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.imageContainer}>
          <ImageViewer images={props.images} />
        </div>
        <div className={styles.textContainer}>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
