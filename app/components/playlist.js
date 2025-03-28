import styles from "./playlist.module.css";

import Heading from "./ui/heading";
import UiContainer from "./ui/uiContainer";
import Button from "./ui/button";
export default function Playlist({
  playlistTracks,
  removeTrack,
  playlistName,
  handlePlaylistNameChange,
  handlePlaylistSave,
}) {
  return (
    <UiContainer>
      <form onSubmit={handlePlaylistSave}>
        <Heading>Create Playlist</Heading>
        <input
          type="text"
          name="playlistName"
          onChange={handlePlaylistNameChange} // update state when input changes
          value={playlistName} // bind value to state in parent
          placeholder="Playlist Name"
        ></input>

        {playlistTracks.length ? (
          playlistTracks.map((track, index) => (
            <div key={index} className={styles.playlistItem}>
              <div>{index + 1}</div>
              <div>{track.song}</div>
              <div>{track.artist}</div>
              <div>{track.album}</div>
              <Button
                handleClick={() => {
                  removeTrack(index);
                }}
              >
                -
              </Button>
            </div>
          ))
        ) : (
          <div className={styles.playlistItem}>
            <div>Add tracks to the playlist</div>
          </div>
        )}

        <div id={styles.buttonContainer}>
          
          <Button type="button" onClick={{handlePlaylistSave}}>Save to Jammming</Button>
        </div>
      </form>
    </UiContainer>
  );
}
