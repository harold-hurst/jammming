import styles from "./searchResults.module.css";

import Heading from "./ui/heading";
import UiContainer from "./ui/uiContainer";
import Button from "./ui/button";

export default function SearchResults({ searchResults, addTrack }) {
  return (
    <UiContainer>
      <Heading>Results</Heading>

      {searchResults.map((result, index) => (
        <div key={index} className={styles.resultItem}>
          <div>{index + 1}</div>
          <div>{result.song}</div>
          <div>{result.artist}</div>
          <div>{result.album}</div>
          <div className={styles.addButton}>
            <Button
              handleClick={() => {
                addTrack(index);
              }}
            >
              +
            </Button>
          </div>
        </div>
      ))}
    </UiContainer>
  );
}
