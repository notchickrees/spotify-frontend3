import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import axios from 'axios';


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(e){
    // e.preventDefault()
    const data={
      "username" : username,
      "password" : password,
    }
    console.log(data);
    axios.post("http://localhost:5000/form", data).then((res)=> console.log(res.data))
  };

  const buttonstyle={
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
    <div className='loginpage'>
    <div className="text-center my-4">
    <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
          alt="spotify logo"
    />
    </div>
    <hr />
    <div className="d-flex align-items-center justify-content-center my-5">
      <form id="login">
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Username
          </label>
          <input type="email" id="form2Example1" name="email" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input type="password" id="form2Example2" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                defaultChecked={true}
              />
              <label className="form-check-label" htmlFor="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col text-right">
            <Link to="/updatepassword">
              <a href="#!">Forgot password?</a>
            </Link>
          </div>
        </div>
        <div className='text-center'>
        <button id= "Signin" style={buttonstyle} onClick={handleSubmit}>
            Sign in
        </button>
        <Link to= "/register">
          <button type="button" id= "Register" style={buttonstyle}>
            Register
          </button>
        </Link>
        </div>
      </form>
    </div>
    </div>
  )
}
