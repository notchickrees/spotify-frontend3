import React, { useState } from "react";
import "./LikedSongs.css";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

function Song(props) {
  const [songname, setSongname] = useState("");
  const [artist, setArtist] = useState("-");
  const [songlink, setSonglink] = useState("");

  function handleSong(e) {
    e.preventDefault();
    console.log("working");
    console.log(props.name);
    console.log(props.artist);
    setArtist(props.artist);
    setSongname(props.name);
  }

  return (
    <div>
      <li className="songItem" onClick={handleSong}>
        <span>{props.count}</span>
        {/* <img src="img/1.jpg" alt="Alan"> */}
        <h5>
          {props.name}
          <div className="subtitle">{props.artist}</div>
        </h5>
        <div className="album">{props.album}</div>
      </li>
      <div className="footer">
        <div className="footer_left">
          <img
            className="footer_albumLogo"
            src="https://i1.sndcdn.com/artworks-aHWeKTP05eBf-0-t500x500.jpg"
            alt=""
          />

          <div className="footer_songInfo">
            <h6>{songname}</h6>
            <p>{artist}</p>
          </div>
        </div>

        <div className="footer_center">
          <img className="shuffle" src={require("./shuffle.png")} alt="" />
          <img className="back" src={require("./back.png")} alt="" />
          <img
            className="playbutton"
            src={require("./playbutton.png")}
            alt=""
          />
          <img className="next" src={require("./next.png")} alt="" />
          <img className="repeat" src={require("./repeat.png")} alt="" />
          {/* <img className="pause" src={require("./pause.png")} alt=""/> */}
        </div>

        <div className="footer_right">
          <img className="volume" src={require("./volume.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default function LikedSongs() {
  useEffect(() => {
    const songs1 = fetchdata();
  });

  async function fetchdata() {
    const songs = await axios.get("http://localhost:5000/songs");
    return songs.data;
  }

  const songs = [
    {
      songname: "On my way",
      artistname: "Alan Walker",
      Albumname: "On my way",
    },
    {
      songname: "horse",
      artistname: "chickrees",
      Albumname: "On my way",
    },
    {
      songname: "On my way",
      artistname: "Alan Walker",
      Albumname: "On my way",
    },
    {
      songname: "On my way",
      artistname: "Alan Walker",
      Albumname: "On my way",
    },
    {
      songname: "On my way",
      artistname: "Alan Walker",
      Albumname: "On my way",
    },
  ];

  var count = 1;
  songs.forEach((song) => {
    song["count"] = count;
    count++;
  });

  {
    /* <img src="img/1.jpg" alt="Alan"> */
  }
  return (
    <div className="songsbody">
      <Sidebar />
      <div className="listsongs">
        <li className="songItem top">
          <span>#</span>
          <h5>Song name</h5>
          <div className="album">Album name</div>
        </li>
        {songs &&
          songs.map((song) => (
            <Song
              key={song.count}
              count={song.count}
              name={song.songname}
              album={song.Albumname}
              artist={song.artistname}
            />
          ))}
      </div>
    </div>
  );
}
