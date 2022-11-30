import React from 'react';
import "./Footer.css";
// import {Grid,Slider} from "@material-ui/core";
// import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlayIcon"


function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <h5 className='abc'>1</h5>
        <img
          className="footer_albumLogo"
          src="https://i1.sndcdn.com/artworks-aHWeKTP05eBf-0-t500x500.jpg" alt="" />
        <div className="box1">          <p className='songName'>Change (in the house of flies)</p>
        </div>
        <div className="box">
          <p className='views'>200,000</p>
        </div>

      </div>

      <p className='time'>4:29</p>



    </div>
  );
}

export default Footer;