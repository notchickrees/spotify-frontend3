import axios from "axios";
import React from "react";
import "./Settings.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Settings() {
  const buttonstyle = {
    fontFamily: "Bold",
    margin: "10px",
    padding: "10px 32px",
    backgroundColor: "black",
    borderRadius: "50px",
    borderWidth: "0px",
    borderColor: "white",
    fontWeight: "600",
    color: "white",
    textDecoration: "none",
    alignText: "center",
  };
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const username = sessionStorage.getItem("username");

  function handleDelete(e) {
    e.preventDefault();
    console.log(`http://localhost:5000/settings/${username}`);
    const response = axios.delete(`http://localhost:5000/settings/${username}`);
    if (response.data.body === "Success") {
      navigate("/login");
    } else {
      setMessage("Deletion was not successful");
    }
  }
  function handleLogout(e){
    e.preventDefault();
    sessionStorage.clear();
    navigate("/login")
  }
  const header = {
    fontFamily: "Bold",
    padding: "30px",
    fontSize: "40px",
    color: "white",
  };

  return (
    <div className="settings">
      <h4 className="title text-center" style={header}>
        Settings
      </h4>
      <div className="text-center">
        <Link to="/dashboard">
          <button type="button" id="Register" style={buttonstyle}>
            Dashboard
          </button>
        </Link>
      </div>
      <div className="text-center">
        <Link to="/updatepassword">
          <button type="button" id="Register" style={buttonstyle}>
            Update Password
          </button>
        </Link>
      </div>
      <div className="text-center">
        <button
          type="button"
          id="Register"
          style={buttonstyle}
          onClick={handleDelete}
        >
          Delete Account
        </button>
      </div>
      <div className="text-center">
        <button type="button" id="Register" style={buttonstyle} onClick= {handleLogout}>
            Logout
        </button>
      </div>
      <p>{message}</p>
    </div>
  );
}
