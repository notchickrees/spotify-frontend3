import React from "react";
import "./LikedSongs.css";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import axios from "axios";

function Song(props) {
  
    function handleSong(e){
        e.preventDefault()
        console.log(props.name)
    }

    return (
    <div>
      <li className="songItem" onClick={handleSong}>
              <span>{props.count}</span>
              {/* <img src="img/1.jpg" alt="Alan"> */}
              <h5>
                {props.name}
                <div className="subtitle">{props.name}</div>
              </h5>
              <div className="album">{props.album}</div>
        </li>
    </div>
  )
}



export default function LikedSongs() {
    
    useEffect(()=>{
        const songs1= fetchdata()        
    })

    async function fetchdata(){
        const songs = await axios.get("http://localhost:5000/songs")
        return songs.data
    }

    const songs = [
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

  {/* <img src="img/1.jpg" alt="Alan"> */}
  return (
    <div className="songsbody">
      <Sidebar/>
      <div className="listsongs">
        <li className="songItem top">
          <span>#</span>
          <h5>Song name</h5>
          <div className="album">Album name</div>
        </li>
        {songs &&
          songs.map((song) => (
            <Song count={song.count} name={song.songname} album={song.Albumname} artist= {song.artistname}/>
          ))}
      </div>
    </div>
  );
}
