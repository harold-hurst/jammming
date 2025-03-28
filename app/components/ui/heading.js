import styles from "./heading.module.css";

export default function Heading({ children }) {
  return <span id={styles.heading}>{children}</span>;
}
