import Image from 'next/image';

import photo from '../public/driveway.jpg';

import styles from '../styles/Service.module.css';

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
          <Image
            alt="Asphalt driveway"
            src={props.photo}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.textContainer}>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
