"use client";

import React, { useState } from "react";

import styles from "./page.module.css";

import Header from "./components/ui/header";

import SearchBar from "./components/searchBar";
import SearchResults from "./components/searchResults";
import Playlist from "./components/playlist";
import SavedPlaylists from "./components/savedPlaylists";
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

  // SAVED PLAYLISTS
  const [savedPlaylists, setSavedPlaylists] = useState([]);

  // PLAYLIST BEING CREATED
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // save playlist name to state using controlled components
  const handlePlaylistNameChange = (e) => {
    setPlaylistName(e.target.value);
  };

  // save new playlist into savedPlaylists
  const handlePlaylistSave = (e) => {
    e.preventDefault();
    const newPlaylist = {
      name: playlistName,
      tracks: playlistTracks,
    };
    setSavedPlaylists([...savedPlaylists, newPlaylist]);
  };

  // add a track to the current playlist being made
  const addTrack = (indexToAdd) => {
    setPlaylistTracks([...playlistTracks, searchResults[indexToAdd]]);
  };

  // remove a track from the current playlist being made
  const removeTrack = (indexToRemove) => {
    setPlaylistTracks(playlistTracks.filter((track, i) => i !== indexToRemove));
  };

  return (
    <>
      <Header />
      <div id={styles.containerDiv}>
        <SearchBar />

        <div id={styles.contentContainer}>
          <SearchResults searchResults={searchResults} addTrack={addTrack} />
          <Playlist
            playlistTracks={playlistTracks}
            removeTrack={removeTrack}
            playlistName={playlistName}
            handlePlaylistNameChange={handlePlaylistNameChange}
            handlePlaylistSave={handlePlaylistSave}
          />
        </div>
        <SavedPlaylists savedPlaylists={savedPlaylists} />
        <Tracklist />
        <Track />
      </div>
    </>
  );
}
