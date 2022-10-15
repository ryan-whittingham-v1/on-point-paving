import Image from 'next/image';

import styles from '../styles/Service.module.css';
import ImageViewer from './ImageViewer';

export default function Service(props) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headingContainer}>
        <div className={styles.rectangle}></div>

        <h2>{props.serviceName}</h2>
        <div className={styles.rectangle}></div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.imageContainer}>
          {props.images.length > 1 ? (
            <ImageViewer images={props.images} />
          ) : (
            <Image
              src={`https:${props?.images[0].fields?.file?.url}?w=800&h=800`}
              alt={props?.images[0].fields?.description}
              layout="fill"
              objectFit="contain"
            />
          )}
        </div>
        <div className={styles.textContainer}>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
