import React, { useState } from "react";
import "./LikedSongs.css";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import axios from "axios";
import { Howl } from "howler";

function Song(props) {
  function handleSong(e) {
    e.preventDefault();
    props.handleSongClick(props.song);
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

const initialValueOfSongs = [
  {
    songname: "On my way",
    artistname: "Alan Walker",
    Albumname: "On my way",
    songlink: "https://dl.dropboxusercontent.com/s/rfz0s49idtk3rhl/Canon%20In%20D.mp3?dl=0"
  },
  {
    songname: "Aitebar",
    artistname: "Abdullah Qureshi",
    Albumname: "Aitebar",
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

export default function LikedSongs() {
  const [selectedSong, setSelectedSong] = useState(initialValueOfSongs[0]);
  const [songs, setSongs] = useState(initialValueOfSongs);
  const [play, setPlay]= useState(require("./playbutton.png"))
  
  useEffect(() => {
    fetchdata();
  }, []);

  const callMySound=() =>{
    const src= selectedSong.songlink
    const sound= new Howl({
      src,
      html5:true,
      preload: true,
    })
    sound.play();
    setPlay(require("./pause.png"))
  };
  
  async function fetchdata() {
    const response = await axios.get("http://localhost:5000/songs");
    const songs = response.data;
    var count = 1;
    songs.forEach((song) => {
      song["count"] = count;
      count++;
    });
    setSongs(songs);
  }

  const handleSongClick = (song) => {
    setSelectedSong(song);
    callMySound();
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
              song={song}
              handleSongClick={handleSongClick}
            />
          ))}
      </div>
      <div className="footer">
        <div className="footer_left">
          <img
            className="footer_albumLogo"
            src="https://i1.sndcdn.com/artworks-aHWeKTP05eBf-0-t500x500.jpg"
            alt=""
          />

          <div className="footer_songInfo">
            <h6>{selectedSong.songname}</h6>
            <p>{selectedSong.artistname}</p>
          </div>
        </div>

        <div className="footer_center">
          <img className="shuffle" src={require("./shuffle.png")} alt="" />
          <img className="back" src={require("./back.png")} alt="" />
          <img
            className="playbutton"
            src={play}
            alt=""
          />
          {/* <img className="pause" src={require("./pause.png")} alt=""/> */}
          <img className="next" src={require("./next.png")} alt="" />
          <img className="repeat" src={require("./repeat.png")} alt="" />
        </div>

        <div className="footer_right">
          <img className="volume" src={require("./volume.png")} alt="" />
        </div>
      </div>
    </div>
  );
}