import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  const buttonstyle={
    padding: "20px",
    backgroundColor: "#1db954",
    borderRadius: "50px",
    borderColor: "black",
    fontWeight: "600",
    color: "white",
    textDecoration: 'none',
  };
  return (
    <div>
      <div className="login">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="spotify logo"
        />
        <Link to="/login">
          <button style={buttonstyle}>LOGIN WITH SPOTIFY</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
