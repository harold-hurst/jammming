import styles from "./savedPlaylists.module.css";

import Heading from "./ui/heading";
import UiContainer from "./ui/uiContainer";
import Button from "./ui/button";

export default function SavedPlaylists({ savedPlaylists, handlePlaylistNameUpdate }) {
  return (
    <UiContainer>
      <Heading>Your Playlists</Heading>

      {savedPlaylists.length ? (
        savedPlaylists.map((playlist, index) => (
          <div key={index} className={styles.playlistItem}>
            <div>{playlist.name}</div>
            <div>{playlist.tracks.length + " songs"}</div>
            <div className={styles.playButton}>
              <Button>play</Button>
              <button
                onClick={() => {
                  handlePlaylistNameUpdate(index, 'new playlist name');
                }}
              >
                change playlist name
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.playlistItem}>No saved paylists</div>
      )}
    </UiContainer>
  );
}
