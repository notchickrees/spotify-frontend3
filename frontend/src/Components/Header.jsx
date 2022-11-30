import React, { useEffect, useState } from 'react';
import "./Header.css";

function Header() {
  const username= sessionStorage.getItem("username")
  const [href, setHref]= useState("")
  const [artist,setArtist]= useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("usertype")==="artist"){
      setHref("http://localhost:3000/uploadsong")
      setArtist("Upload Song")
    }
  },[]);
  
  return (
    <div className="header">
        <div className="header_left">
        {/* searchicon */}
        <input
            placeholder="Search for Artists and Songs"
            type="text"
        />
        </div>
        <div className="header_right">
            {/* <Avatar src= "" alt="Amna Sahar" /> */}
            <a href={href}>{artist}</a>
            <a href='http://localhost:3000/settings'>{username}</a>
        </div>
    </div>
  )
}

export default Header