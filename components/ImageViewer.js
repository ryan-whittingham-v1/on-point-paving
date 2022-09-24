import { useCallback, useEffect, useState } from 'react';
import styles from '../styles/imageViewer.module.css';
import Image from './Image.js';

export default function ImageViewer(props) {
  const displayTime = 5000;
  const delayChangeTime = 500;
  const hideTime = 500;
  const forwardIcon = '>';
  const backwardIcon = '<';

  const [pause, setPause] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [imageAnimate, setImageAnimate] = useState(styles.slideInFromLeft);

  const increaseImageIndex = useCallback(async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve('done!');
      }, delayChangeTime);
    });
    await promise;
    setImageIndex((imageIndex + 1) % props?.images.length);
  }, [imageIndex, props.images.length]);

  const decreaseImageIndex = useCallback(async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve('done!');
      }, delayChangeTime);
    });
    await promise;
    setImageIndex(imageIndex === 0 ? props?.images.length - 1 : imageIndex - 1);
  }, [imageIndex, props.images.length]);

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

  function handlePause() {
    setPause(!pause);
  }

  function handleZoom() {
    setZoom(!zoom);
    if (!pause) {
      setPause(true);
    }
  }

  function closeZoom() {
    setZoom(false);
    setPause(false);
    handleNextClick();
  }

  return (
    <div className={styles.mainContainer}>
      <div className={imageAnimate}>
        <Image
          src={props.images[imageIndex]}
          alt={imageIndex}
          handleZoom={handleZoom}
          zoom={zoom}
          closeZoom={closeZoom}
        />
      </div>
      <div className={styles.navigationContainer}>
        <button onClick={handlePrevClick}>{backwardIcon}</button>
        {/*<button onClick={handlePause}>{pause ? "Play" : "Pause"}</button>*/}
        <button onClick={handleNextClick}>{forwardIcon}</button>
      </div>
    </div>
  );
}
