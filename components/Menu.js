import { useRouter } from 'next/router';

import styles from '../styles/Menu.module.css';

export default function Menu(props) {
  const router = useRouter();

  const defaultStyle = {
    transition: `transform ${props.duration}ms ease-in-out`,
    transform: 'translateX(-101%)',
  };

  const transitionStyles = {
    entering: { transform: 'translateX(-101%)' },
    entered: { transform: 'translateX(0)' },
  };

  function handleRedirect(page) {
    router.push(page);
    props.closeMenu();
  }

  return (
    <div
      className={styles.mainContainer}
      style={{
        ...defaultStyle,
        ...transitionStyles[props.state],
      }}
    >
      <div className={styles.closeMenu}>
        <button onClick={() => props.closeMenu()}>x</button>
      </div>
      <div className={styles.optionsContainer}>
        <div className={styles.option}>
          <button onClick={() => handleRedirect('/')}>HOME</button>
        </div>
        <div className={styles.option}>
          <button onClick={() => handleRedirect('/')}>SERVICES</button>
        </div>
        <div className={styles.option}>
          <button onClick={() => handleRedirect('/')}>ABOUT US</button>
        </div>
        <div className={styles.option}>
          <button onClick={() => handleRedirect('/')}>CONTACT US</button>
        </div>
      </div>
    </div>
  );
}
