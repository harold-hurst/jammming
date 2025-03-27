import styles from "./page.module.css";

import Header from "./components/ui/header";

import SearchBar from "./components/searchBar";
import SearchResults from "./components/searchResults";
import Playlist from "./components/playlist";
import Tracklist from "./components/tracklist";
import Track from "./components/track";

const searchResults = [
  {
    artist: "Drake",
    song: "Headlines",
    album: "Take Care (Delux)",
  },
  {
    artist: "AJ Tracy, Jorja Smith",
    song: "Crush (feat. Jorja Smoth)",
    album: "",
  },
  {
    artist: "Dave, Central Cee",
    song: "Sprinter",
    album: "",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <div id={styles.containerDiv}>
        <SearchBar />
        <SearchResults searchResults={searchResults} />
        <Playlist />
        <Tracklist />
        <Track />
      </div>
    </>
  );
}
