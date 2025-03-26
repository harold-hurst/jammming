import styles from "./searchBar.module.css";

export default function SearchBar() {
    return (
        <div className={styles.searchContainer}>
        <form>
          <input
            type="text"
            placeholder="Search..."
            // value={searchQuery}
            // onChange={handleChange}
            className={styles.searchInput} // Apply CSS Module class
          />
          <button
            type="submit"
            className={styles.searchButton} // Apply CSS Module class
          >
            Search
          </button>
        </form>
      </div>
    )
}