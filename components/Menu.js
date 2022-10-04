import { useRouter } from 'next/router';

import styles from '../styles/Menu.module.css';

export default function Menu(props) {
  const router = useRouter();

  function handleRedirect(page) {
    router.push(page);
    props.close();
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.closeMenu}>
        <button onClick={() => props.close()}>x</button>
      </div>
      <nav className={styles.optionsContainer}>
        <div className={styles.option}>
          <button onClick={() => handleRedirect('/about')}>ABOUT US</button>
        </div>
        <div className={styles.option}>
          <button onClick={() => handleRedirect('/contact')}>CONTACT US</button>
        </div>
        <div className={styles.option}>
          <button onClick={() => handleRedirect('/services')}>SERVICES</button>
        </div>
        <div className={styles.option}>
          <button onClick={() => handleRedirect('/')}>HOME</button>
        </div>
      </nav>
    </div>
  );
}
