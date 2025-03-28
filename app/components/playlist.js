import styles from "./playlist.module.css";

import Button from "./ui/button";
export default function Playlist({ playlistTracks }) {
  return (
    <div className={styles.playlistContainer}>
      <span>Create Playlist</span>
      <input type="text"></input>

      {playlistTracks.length ? (
        playlistTracks.map((track, index) => (
          <div key={index} className={styles.playlistItem}>
            <div>{index + 1}</div>
            <div>{track.song}</div>
            <div>{track.artist}</div>
            <div>{track.album}</div>
          </div>
        ))
      ) : (
        <div className={styles.playlistItem}>
          <div>Add tracks to the playlist</div>
        </div>
      )}

      <div id={styles.buttonContainer}>
        <Button>Save to Jammming</Button>
      </div>
    </div>
  );
}
