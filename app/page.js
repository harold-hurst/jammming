"use client";

import React, { useState } from "react";

import styles from "./page.module.css";

import Header from "./components/ui/header";

import SearchBar from "./components/searchBar";
import SearchResults from "./components/searchResults";
import Playlist from "./components/playlist";
import Tracklist from "./components/tracklist";
import Track from "./components/track";

export default function Home() {
  // search results from Spotify
  const [searchResults, setSearchResults] = useState([
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
  ]);

  // playlist being added
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (indexToAdd) => {
    setPlaylistTracks([...playlistTracks, searchResults[indexToAdd]]);

  };

  // saved playlists
  const [savedPlaylists, setSavedPlaylists] = useState([]);

  return (
    <>
      <Header />
      <div id={styles.containerDiv}>
        <SearchBar />

        <div id={styles.contentContainer}>






          <SearchResults searchResults={searchResults} addTrack={addTrack} />

          <Playlist playlistTracks={playlistTracks} />





        </div>
        <Tracklist />
        <Track />
      </div>
    </>
  );
}
