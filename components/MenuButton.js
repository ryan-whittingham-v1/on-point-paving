import React, { useState, useEffect } from 'react';

import { Transition } from 'react-transition-group';

import Menu from './Menu';

import styles from '../styles/MenuButton.module.css';

export default function MenuButton() {
  const [menuOpen, setMenuOpen] = useState(false);
  const duration = 300;

  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        document.documentElement.style.overflow = 'hidden';
      }, duration * 2);
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <>
      <div className={styles.mainContainer}>
        <button onClick={() => setMenuOpen(true)}>
          <div className={styles.rectangle}></div>
          <div className={styles.rectangle}></div>
          <div className={styles.rectangle}></div>
        </button>
      </div>
      <Transition in={menuOpen} timeout={duration}>
        {(state) => (
          <Menu
            duration={duration}
            state={state}
            closeMenu={() => setMenuOpen(false)}
          />
        )}
      </Transition>
    </>
  );
}
