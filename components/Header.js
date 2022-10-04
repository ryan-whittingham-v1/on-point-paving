import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Menu from './Menu';

import styles from '../styles/Header.module.css';
import logo from '../public/OPP-Logo-02-01-1024x89.png';

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <>
      {menuVisible && <Menu close={() => setMenuVisible(false)} />}
      <div className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <Image
                  alt="On Point Paving Logo"
                  src={logo}
                  layout="responsive"
                  width={1024}
                  height={89}
                  priority
                />
              </a>
            </Link>
          </div>
          <div className={styles.phone}>360.720.7606</div>
        </div>
        <div className={styles.buttonContainer}>
          <button type="button" onClick={() => setMenuVisible(true)}>
            <div className={styles.rectangle}></div>
            <div className={styles.rectangle}></div>
            <div className={styles.rectangle}></div>
          </button>
        </div>
      </div>
    </>
  );
}
