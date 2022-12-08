import React, { useState, useRef } from "react";
import "./LikedSongs.css";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import axios from "axios";

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
    songlink:
      "https://dl.dropboxusercontent.com/s/rfz0s49idtk3rhl/Canon%20In%20D.mp3?dl=0",
  },
  {
    songname: "Aitebar",
    artistname: "Abdullah Qureshi",
    Albumname: "Aitebar",
    songlink: "https://dl.dropboxusercontent.com/s/rfz0s49idtk3rhl/Canon%20In%20D.mp3?dl=0"
  },
  {
    songname: "On my way 2",
    artistname: "Alan Walker",
    Albumname: "On my way",
    songlink: "https://dl.dropboxusercontent.com/s/rfz0s49idtk3rhl/Canon%20In%20D.mp3?dl=0"
  },
  {
    songname: "On my way 3",
    artistname: "Alan Walker",
    Albumname: "On my way",
  },
  {
    songname: "On my way 4",
    artistname: "Alan Walker",
    Albumname: "On my way",
  },
];

export default function LikedSongs() {
  const [selectedSong, setSelectedSong] = useState("");
  const [songs, setSongs] = useState(initialValueOfSongs);
  const [play, setPlay] = useState(require("./playbutton.png"));
  const audio= useRef(new Audio(selectedSong.songlink));
  const [repeat, setRepeat]= useState(false);
  const [shuffle, setShuffle]= useState(false);
  const [repeatpng, setRepeatpng] =useState(require("./repeat.png"))
  const [shufflepng, setShufflepng] =useState(require("./shuffle.png"))

  

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(()=>{
    audio.current.addEventListener('ended', handleEnd)
    
    function handleEnd(){
      handlenext();
    }
  })

  useEffect(()=>{
    console.log("fired")
    // audio.current=new Audio(selectedSong.songlink);
    audio.current.pause();
    audio.current.src= selectedSong.songlink;
    audio.current.load()
    callMySound();
  },[selectedSong]);

  const callMySound = () => {
    audio.current.play();
    // setPlaying(true);
    setPlay(require("./pause.png"));
  };

  const handleplay= ()=>{
    if(play===require("./pause.png")){
      audio.current.pause()
      setPlay(require("./playbutton.png"))
    }
    else{
      audio.current.play()
      setPlay(require("./pause.png"))
    }
  }

  const handlenext = () => {
    const length= songs.length;
    var index = songs.indexOf(selectedSong);
    if(repeat === true){
      console.log("here")
      setSelectedSong(songs[index])
    }
    else if(shuffle === true){
      var shuffle_index= Math.floor(Math.random()* length);
      setSelectedSong(songs[shuffle_index]);
    }
    else if(index === length - 1){
      setSelectedSong(songs[0]);
    }
    else{
      setSelectedSong(songs[index + 1])
    }
  }

  const handleprevious = () => {
    const length= songs.length;
    var index = songs.indexOf(selectedSong);
    if(index == 0){
      setSelectedSong(songs[index-1]);
    }
    else{
      setSelectedSong(songs[index - 1])
    }
  }

  const handleshuffle = ()=> {
    if(shuffle == false){
      setShuffle(true)
      setShufflepng(require("./shuffle2.png"))
    }
    else{
      setShuffle(false)
      setShufflepng(require("./shuffle.png"))
    }
  }

  const handlerepeat = () => {
    if(repeat == false){
      setRepeat(true)
      setRepeatpng(require("./repeat2.png"))
    }
    else{
      setRepeat(false)
      setRepeatpng(require("./repeat.png"))
    }
  }

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
  };

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
          <div className="footer_songInfo">
            <h6>{selectedSong.songname}</h6>
            <p>{selectedSong.artistname}</p>
          </div>
        </div>

        <div className="footer_center">
          <img className="shuffle" src={shufflepng} alt="" onClick={handleshuffle}/>
          <img className="back" src={require("./back.png")} alt="" onClick= {handleprevious} />
          <img className="playbutton" src={play} alt="" onClick={handleplay}/>
          {/* <img className="pause" src={require("./pause.png")} alt=""/> */}
          <img className="next" src={require("./next.png")} alt="" onClick= {handlenext}/>
          <img className="repeat" src={repeatpng} alt="" onClick={handlerepeat} />
        </div>

        <div className="footer_right">
          <img className="volume" src={require("./volume.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
