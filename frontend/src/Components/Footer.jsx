import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./Footer.css";

function Footer() {


  return (
    <div className = "footer">
        <div className="footer_left">
          <img 
          className="footer_albumLogo"
          src="https://i1.sndcdn.com/artworks-aHWeKTP05eBf-0-t500x500.jpg" alt=""/>

          <div className="footer_songInfo">
            <h6>{songname}</h6>
            <p>{artist}</p>
          </div>
        </div>

        <div className="footer_center">
        <img className="shuffle" src={require("./shuffle.png")} alt=""/>
        <img className="back" src={require("./back.png")} alt=""/>
        <img className="playbutton" src={require("./playbutton.png")} alt=""/>
        <img className="next" src={require("./next.png")} alt=""/>
        <img className="repeat" src={require("./repeat.png")} alt=""/>
        {/* <img className="pause" src={require("./pause.png")} alt=""/> */}

        </div>

        <div className="footer_right">
        <img className="volume" src={require("./volume.png")} alt=""/>
        </div>
    </div>
  );
}

export default Footer;