import React, { useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateSong() {
  const [songName, setSongName] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [songPath, setSongPath] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    if (!songName) {
      alert("Song Name Cannot be empty");
    } else if (!albumName) {
      alert("Album Name Cannot be empty");
    
    }
  else if (!artistName) {
    alert("Artist Name Cannot be empty");
  
  }
  else if (!songPath) {
    alert("Song Path Cannot be empty");
  
  }
    
    else{  
      const data = {
        "songName": songName,
        "albumName": albumName,
        "artistName":artistName,
        "songPath":songPath
      }
      
      const response = await axios.post("http://localhost:5000/uploadsong", data)
      console.log("reponse:", response.data)
      if (response.data.body === "Success") {
        navigate('/dashboard')
      }
      else {
        setMessage("The username is invalid.")
      }
    }

  };

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

  return (
    <div className='createsongpage '>
      <div className="text-left my-3 mx-4 mb-0">
        <h3>Create your release</h3>
      </div>
      <hr />
      <h4 className='mx-4 my-3'>Basic info</h4>
      <div className=" d-flex align-items-center justify-content-center my-5">
        <form id="login">
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              What is this release called?
            </label>
            <input type="email" id="form2Example1" name="email" className="form-control " value={songName}  onChange={(e)=>setSongName(e.target.value)}/>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              What is the album name?
            </label>

            <input type="text" id="form2Example2" name="password" className="form-control" value={albumName}  onChange={(e)=>setAlbumName(e.target.value)}/>
            <label className="form-label mt-4" htmlFor="form2Example2">
              What is the name of the artist?
            </label>

            <input type="text" id="form2Example2" name="password" className="form-control" value={artistName} onChange={(e)=>setArtistName(e.target.value)}/>
            <label className="form-label mt-4" htmlFor="form2Example2">
              What is the song path?
            </label>

            <input type="text" id="form2Example2" name="password" className="form-control" value={songPath} onChange={(e)=>setSongPath(e.target.value)}/>
            
           
            <div className='text-center my-3'>
              <button id="Signin" style={buttonstyle} onClick={handleSubmit}>
                Upload song
              </button>

            </div>
            
          </div>
 
            

          <p>{message}</p>
        </form>
      </div>
    </div>
  )
}
