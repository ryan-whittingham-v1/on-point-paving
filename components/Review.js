import styles from '../styles/Review.module.css';
import Image from 'next/image';

import star from '../public/star.png';

export default function Review(props) {
  const author = `- ${props?.review?.fields?.customerName}`;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.photo}>
        <Image
          alt={`https:${props?.review?.fields?.image?.fields?.description}`}
          src={`https:${props?.review?.fields?.image?.fields?.file?.url}`}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={styles.quote}>
        <p>{props?.review?.fields?.review}</p>
        <div className={styles.stars}>
          <Image alt="Star" src={star} layout="fixed" width={30} height={30} />
          <Image alt="Star" src={star} layout="fixed" width={30} height={30} />
          <Image alt="Star" src={star} layout="fixed" width={30} height={30} />
          <Image alt="Star" src={star} layout="fixed" width={30} height={30} />
          <Image alt="Star" src={star} layout="fixed" width={30} height={30} />
        </div>
        <div className={styles.author}>
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
}
