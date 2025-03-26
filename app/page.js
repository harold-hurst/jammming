import SearchBar from "./components/searchBar";
import SearchResults from "./components/searchResults";
import Playlist from "./components/playlist";
import Tracklist from "./components/tracklist";
import Track from "./components/track";


export default function Home() {
  return (
    <>
      <SearchBar/>
      <SearchResults/>
      <Playlist/>
      <Tracklist/>
      <Track/>
    </>
  );
}
