import React from 'react';
import "./Header.css";

function Header() {
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
            <h4>Amna Sahar</h4>
        </div>
    </div>
  )
}

export default Header