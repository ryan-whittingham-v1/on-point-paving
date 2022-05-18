import Image from 'next/image';
import Link from 'next/link';

import MenuButton from './MenuButton';

import styles from '../styles/Header.module.css';
import logo from '../public/OPP-Logo-02-01-1024x89.png';

export default function Header() {
  return (
    <div className={styles.mainContainer}>
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
        <p>360.720.7606</p>
      </div>
      <div className={styles.button}>
        <MenuButton />
      </div>
    </div>
  );
}
