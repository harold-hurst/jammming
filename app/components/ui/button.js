'use client'

import styles from './button.module.css';

export default function Button({ children, onClick }) {
  return (
    <button
      type="submit"
      className={styles.searchButton}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
