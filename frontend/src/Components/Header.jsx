import React from 'react';
import "./Header.css";

function Header() {
  const username= sessionStorage.getItem("username")
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
            <a href='http://localhost:3000/settings'>{username}</a>
        </div>
    </div>
  )
}

export default Header