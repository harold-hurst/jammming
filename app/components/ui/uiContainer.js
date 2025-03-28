import styles from "./uiContainer.module.css"

export default function UiContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
