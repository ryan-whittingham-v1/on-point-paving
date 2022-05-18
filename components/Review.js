import styles from '../styles/Review.module.css';
import Image from 'next/image';

import photo from '../public/Oregon-City-3-scaled.jpg';
import star from '../public/star.png';

export default function Review() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.photo}>
        <Image
          alt="Freshly paved road with beautiful landscaping"
          src={photo}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className={styles.stars}>
        <Image alt="Star" src={star} layout="fixed" width={30} height={30} />
        <Image alt="Star" src={star} layout="fixed" width={30} height={30} />
        <Image alt="Star" src={star} layout="fixed" width={30} height={30} />
        <Image alt="Star" src={star} layout="fixed" width={30} height={30} />
        <Image alt="Star" src={star} layout="fixed" width={30} height={30} />
      </div>
      <div className={styles.quote}>
        <p>
          “On Point Paving was prompt to respond and did a fantastic job on our
          new driveway. It looks absolutely beautiful and the quality is top
          notch!”
        </p>
        <p className={styles.author}>Bethany W - Battle Ground</p>
      </div>
    </div>
  );
}