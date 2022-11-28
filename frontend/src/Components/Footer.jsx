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
          <p>Buttons</p>
        </div>

        <div className="footer_right">
          <p>Volume controls</p>
        </div>
    </div>
  );
}

export default Footer;