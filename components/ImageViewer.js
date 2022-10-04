import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Modal from './Modal.js';
import styles from '../styles/imageViewer.module.css';

export default function ImageViewer(props) {
  const displayTime = 5000;
  const delayChangeTime = 500;
  const hideTime = 550;
  const forwardIcon = '>>';
  const backwardIcon = '<<';

  const [pause, setPause] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [imageAnimate, setImageAnimate] = useState(styles.slideInFromLeft);

  const arrayOfImgElements = props?.images?.map((image, index) => {
    return (
      <Image
        key={index}
        src={`https:${props?.images[imageIndex].fields?.file?.url}`}
        alt={props?.images[imageIndex].fields?.description}
        layout="fill"
        objectFit="cover"
        priority
      />
    );
  });

  const increaseImageIndex = useCallback(async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve('done!');
      }, delayChangeTime);
    });
    await promise;
    setImageIndex((imageIndex + 1) % props?.images?.length);
  }, [imageIndex, props?.images?.length]);

  const decreaseImageIndex = useCallback(async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve('done!');
      }, delayChangeTime);
    });
    await promise;
    setImageIndex(imageIndex === 0 ? props?.images.length - 1 : imageIndex - 1);
  }, [imageIndex, props?.images?.length]);

  const handleNextClick = useCallback(() => {
    increaseImageIndex();
    animateImageForward();
  }, [increaseImageIndex]);

  const handlePrevClick = useCallback(() => {
    decreaseImageIndex();
    animateImageBackward();
  }, [decreaseImageIndex]);

  //handles forward animation
  async function animateImageForward() {
    setImageAnimate(styles.slideOutToRight);
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve('done!');
      }, hideTime);
    });
    await promise;
    setImageAnimate(styles.slideInFromLeft);
  }

  //handles backward animation
  async function animateImageBackward() {
    setImageAnimate(styles.slideOutToLeft);
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve('done!');
      }, hideTime);
    });
    await promise;
    setImageAnimate(styles.slideInFromRight);
  }

  //create interval to automatically flip through images
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        handleNextClick();
      }
    }, displayTime);
    return () => clearInterval(interval);
  }, [pause, imageIndex, handleNextClick]);

  function handleZoom() {
    if (!zoom) {
      setZoom(true);
      setPause(true);
    } else if (zoom) {
      setZoom(false);
      setPause(false);
      handleNextClick();
    }
  }

  return (
    <>
      {zoom && (
        <Modal
          toggle={handleZoom}
          image={
            <Image
              src={`https:${props?.images[imageIndex].fields?.file?.url}`}
              alt={props?.images[imageIndex].fields?.description}
              layout="fill"
              objectFit="contain"
              priority
            />
          }
        />
      )}
      <div className={styles.mainContainer}>
        <div className={styles.imagesContainer}>
          <div className={imageAnimate} onClick={handleZoom}>
            {arrayOfImgElements[imageIndex]}
          </div>
        </div>
        <div className={styles.navigationContainer}>
          <button onClick={handlePrevClick}>{backwardIcon}</button>
          <button onClick={handleNextClick}>{forwardIcon}</button>
        </div>
      </div>
    </>
  );
}
