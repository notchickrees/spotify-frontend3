import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function DeleteSong() {
  const navigate = useNavigate();
  
  const buttonstyle = {
    fontFamily: "Bold",
    margin: "10px",
    padding: "10px 32px",
    backgroundColor: "#1ed760",
    borderRadius: "50px",
    borderWidth: "1px",
    borderColor: "white",
    fontWeight: "600",
    color: "black",
    textDecoration: 'none',
    alignText: "center",
  };

  async function handleDelete(e){
    e.preventDefault()
    if (!song) {
      alert("Song Cannot be empty");
    }
    else{
      const response = await axios.delete(`http://localhost:5000/deletesong/${sessionStorage.getItem("username")}/${song}`)
      if (response.data.body === "Success"){
        setMessage("Delete Successful")
        navigate("/dashboard")
      }
      else{
        setMessage("Delete unsuccessful, either song name is invalid or you cannot delete that song")
      }
    }
  }

  const [song,setSong]= useState("")
  const [message, setMessage] = useState("")
  return (
    <div>
      <div className="createsongpage ">
        <div className="text-left my-3 mx-4 mb-0">
          <h3>Delete a song</h3>
        </div>
        <hr />
        <div className=" d-flex align-items-center justify-content-center my-5">
          <form id="login">
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example2">
                Enter the song name
              </label>
              <input
                type="email"
                id="form2Example1"
                name="email"
                className="form-control "
                value={song}
                onChange={(e) => setSong(e.target.value)}
              />
            </div>
            <div className="form-outline mb-4">
              <div className="text-center my-3">
                <button id="Signin" style={buttonstyle} onClick={handleDelete}>
                  Delete Song
                </button>
              </div>
            </div>
            <p>{message}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
