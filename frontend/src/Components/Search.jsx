import React from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";

function Song(props) {
  function handleSong(e) {
    e.preventDefault();
    props.handleLiked(props.song);
  }

  return (
    <div>
      <li className="songItem" onClick={handleSong}>
        <span>{props.song.count}</span>
        <h5>
          {props.song.songname}
          <div className="subtitle">{props.song.artistname}</div>
        </h5>
        <div className="album">{props.song.Albumname}</div>
      </li>
    </div>
  );
}

export default function Search() {
  const username = sessionStorage.getItem("username");
  const [href, setHref] = useState("");
  const [artist, setArtist] = useState("");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [songs, setSongs] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("usertype") === "artist") {
      setHref("http://localhost:3000/uploadsong");
      setArtist("Upload Song");
    }
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    if (!search) {
      alert("Search cannot be empty");
    } else {
      const data = {
        search: search,
      };
      const response = await axios.post("http://localhost:5000/search", data);
      if (response.data.body == "Failure") {
        setMessage("Could not find the song");
      } else {
        setSongs(response.data.data);
        var count = 1;
        songs.forEach((song) => {
          song["count"] = count;
          count++;
        });
        setSongs(songs);
      }
    }
  }
  async function handleLiked(song){
    song["liked"]= true;
    var index= songs.indexOf(song);
    songs[index]= song;
  }

  return (
    <div>
      <div className="Dashboard">
        <div className="Dashboard_body">
          <Sidebar />
          <div className="body">
            <div className="header">
              <div className="header_left">
                {/* searchicon */}
                <input
                  placeholder="Search for Artists and Songs"
                  type="text"
                  name="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button id="btn" onClick={handleSearch}>
                  Search
                </button>
              </div>
              <div className="header_right">
                {/* <Avatar src= "" alt="Amna Sahar" /> */}
                <a href={href}>{artist}</a>
                <a href="http://localhost:3000/settings">{username}</a>
              </div>
            </div>
            <h3 className="my-5">{message}</h3>
            {songs &&
              songs.map((song) => (
                <Song
                  key={song.count}
                  song={song}
                  handleLiked={handleLiked}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
