'use client'

import styles from './button.module.css';

export default function Button({ children, handleClick }) {
  return (
    <button
      type="submit"
      className={styles.searchButton}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
