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

  // SEARCH RESULTS FROM SPOTIFY
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

  // PLAYLIST BEING CREATED
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // add a track to the current playlist being made
  const addTrack = (indexToAdd) => {
    setPlaylistTracks([...playlistTracks, searchResults[indexToAdd]]);
  };

  const removeTrack = (indexToRemove) => {
    setPlaylistTracks(playlistTracks.filter((track,i) => i !== indexToRemove))
  }


  // SAVED PLAYLISTS
  const [savedPlaylists, setSavedPlaylists] = useState([]);

  return (
    <>
      <Header />
      <div id={styles.containerDiv}>
        <SearchBar />

        <div id={styles.contentContainer}>






          <SearchResults searchResults={searchResults} addTrack={addTrack} />

          <Playlist playlistTracks={playlistTracks} removeTrack={removeTrack} />





        </div>
        <Tracklist />
        <Track />
      </div>
    </>
  );
}
