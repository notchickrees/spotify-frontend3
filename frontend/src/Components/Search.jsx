import React from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";
import "./LikedSongs.css";

function Song(props) {

  useEffect(() => {
    if (props.song.liked == true) {
      setLikedpng(require("./likefilled.png"))
    }
  }, [])

  const [likedpng, setLikedpng] = useState(require("./like.png"));

  async function handleLiked() {
    if (likedpng == require("./likefilled.png")) {
      setLikedpng(require("./like.png"));
      const data = {
        email: sessionStorage.getItem("email"),
        song_id: props.song.song_id,
      };
      const response = await axios.post(`http://localhost:5000/unlikesong`, data);
    } else {
      const data = {
        email: sessionStorage.getItem("email"),
        song_id: props.song.song_id,
      };
      const response = await axios.post(`http://localhost:5000/likesong`, data);
      setLikedpng(require("./likefilled.png"));
    }
  }

  return (
    <div>
      <li className="songItem">
        <span>{props.song.count}</span>
        <h5>
          {props.song.songname}
          <div className="subtitle">{props.song.artistname}</div>
        </h5>
        <div className="album">{props.song.Albumname}</div>
        <div className="likefilled" />
        <img
          className="likefilled"
          src={likedpng}
          alt=""
          onClick={handleLiked}
        />
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
  const [code, setCode] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("usertype") === "artist") {
      setHref("http://localhost:3000/uploadsong");
      setArtist("Upload Song");
    }
    fetchdata()
  }, []);

  async function fetchdata() {
    const response = await axios.get(`http://localhost:5000/getallsongs`);
    var count = 1;
    response.data.data.forEach((song) => {
      song["count"] = count;
      count++;
    });
    setSongs(response.data.data);
  }
  
  useEffect(() => {
    setCode(
      songs &&
      songs.map((song) => (
        <Song
          key={song.count}
          song={song}
        />
      ))
    )
  }, [songs])


  async function handleSearch(e) {
    e.preventDefault()
    setMessage("")
    if (!search) {
      alert("Search cannot be empty");
    } else {
      const keyword = search;
      const email = sessionStorage.getItem("email")
      const response = await axios.get(
        `http://localhost:5000/search/${keyword}/${email}`
      );
      const response2 = await axios.get(`http://localhost:5000/getlikedsongs/${email}`);
      console.log(response2.data.data)
      if (response.data.body == "Failed") {
        setMessage("Could not find the song");
        setSearch("");
        setSongs("")
      } else {
        var count = 1;
        response.data.data.forEach((song) => {
          if (response2.data.data) {
            for (var i = 0; i < response2.data.data.length; i++) {
              console.log("here")
              if (response2.data.data[i].songname == song.songname) {
                console.log("true")
                song["liked"] = true;
              }
            }
          }
          song["count"] = count;
          count++;
        });
        setSongs(response.data.data);
        console.log(songs);
      }
    }
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
                <form action="">
                  <input
                    placeholder="Search for Songs"
                    type="text"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button id="btn" onClick={handleSearch}>
                    Search
                  </button>
                </form>
              </div>
              <div className="header_right">
                {/* <Avatar src= "" alt="Amna Sahar" /> */}
                <a href={href}>{artist}</a>
                <a href="http://localhost:3000/settings">{username}</a>
              </div>
            </div>
            <h3 className="my-5">{message}</h3>
            <div className="listsongs">
              {code}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
