import styles from "./searchResults.module.css";

import Button from "./ui/button";

export default function SearchResults({ searchResults, addTrack }) {
  return (
    <>
      <div className={styles.resultsContainer}>
        <span>Results</span>

        {searchResults.map((result, index) => (
          <div key={index} className={styles.resultItem}>
            <div>{index + 1}</div>
            <div>{result.song}</div>
            <div>{result.artist}</div>
            <div>{result.album}</div>
            <div className={styles.addButton}>
              <Button
                onClick={() => {
                  addTrack(index);
                }}
              >
                +
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
