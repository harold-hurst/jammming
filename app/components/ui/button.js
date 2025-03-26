import styles from './button.module.css';

export default function Button({ children }) {
  return (
    <button
      type="submit"
      className={styles.searchButton} // Apply CSS Module class
    >
      {children}
    </button>
  );
}
