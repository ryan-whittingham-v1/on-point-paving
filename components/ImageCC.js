import Image from 'next/image';
import styles from '../styles/imageCC.module.css';

export default function ImageCC(props) {
  return (
    <div className={styles.mainContainer}>
      {/*{props.zoom && (
        <div className={styles.modalContainer} onClick={props.closeZoom}>
          <div>
            <Image
              src={props.src}
              alt={props.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="50% 40%"
            />
          </div>
        </div>
      )}*/}
      <div className={styles.imageContainer}>
        <Image
          src={props.src}
          alt={props.alt}
          onClick={props.handleZoom}
          layout="fill"
          objectFit="cover"
          objectPosition="50% 40%"
          priority
        />
      </div>
    </div>
  );
}
