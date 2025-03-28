import styles from "./playlist.module.css";

export default function Playlist({ playlistTracks }) {
  return (
    <div className={styles.playlistContainer}>
      <span>Your Playlist</span>

      {playlistTracks.map((track, index) => (
        <div key={index} className={styles.playlistItem}>
          <div className={styles.playlistItem}>
            <div>{index + 1}</div>
            <div>{track.song}</div>
            <div>{track.artist}</div>
            <div>{track.album}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
