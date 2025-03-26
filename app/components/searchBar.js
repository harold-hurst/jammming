import styles from "./searchBar.module.css";

import Button from "./ui/button";

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
          <Button>Search</Button>
        </form>
      </div>
    )
}