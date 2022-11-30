import React from "react";
import "./Body.css";
import Header from "./Header.jsx";

function Body() {
  return (
    <div className="body">
      <Header />
      <h4>Mood</h4>
      <div className="body_info">
        <img
          src="https://i.scdn.co/image/ab67706f00000003c0d9b0a600352ab5d14abe70"
          alt=""
        />
        <img
          src="https://i.scdn.co/image/ab67706f00000003e6fc98620cda649d45e42bc6"
          alt=""
        />
        <img
          src="https://i.scdn.co/image/ab67706f000000039aa42591fbab663c3669bdfc"
          alt=""
        />
        <img
          src="https://i.scdn.co/image/ab67706f00000003cd349fac2787bfdf2060a46a"
          alt=""
        />
        {/* <div className="body_infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>Description...</p>
            </div> */}
        <br />
      </div>
      <br />
      <div className="body2">
        <h4>Made For You</h4>
        <div className="img2">
          <img
            src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebb78f77c5583ae99472dd4a49/1/en/large"
            alt=""
          />
          <img
            src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebf7db7c8ede90a019c54590bb/2/en/large"
            alt=""
          />
          <img
            src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/3/en/large"
            alt=""
          />
          <img
            src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb727a2ac15afe659be999beba/4/en/large"
            alt=""
          />
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Body;
