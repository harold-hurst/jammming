import styles from "./searchResults.module.css";

export default function SearchResults({ searchResults }) {
  return (
    <>
      <div>
      
          {searchResults.map((result, index) => (

              <div key={index} className={styles.resultItem}>
                <div>{index + 1}</div>
                <div>{result.song}</div>
                <div>{result.artist}</div>
                <div>{result.album}</div>
              </div>
            
          ))}
        
      </div>
    </>
  );
}
