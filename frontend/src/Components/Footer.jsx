import React from 'react';
import "./Footer.css";
// import {Grid,Slider} from "@material-ui/core";
// import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlayIcon"


function Footer() {
  return (
    <div className = "footer">
        <div className="footer_left">
          <img 
          className="footer_albumLogo"
          src="https://i1.sndcdn.com/artworks-aHWeKTP05eBf-0-t500x500.jpg" alt=""/>

          <div className="footer_songInfo">
            <h6>Serenade</h6>
            <p>BANNERS</p>
          </div>
        </div>

        <div className="footer_center">
          <img className="buttons"
          src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_play_circle_filled_white_48px-512.png"
          alt="play button"/>
        </div>

        <div className="footer_right">
          <p>Volume controls</p>
        </div>
    </div>
  );
}

export default Footer;