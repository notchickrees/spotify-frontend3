import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) {
      alert("Email Cannot be empty");
      setEmail("")
      setPassword("")
    } else if (!password) {
      alert("Password Cannot be empty");
      setEmail("")
      setPassword("")
    }
    else{  
      const data = {
        "email": email,
        "password": password,
      }
      
      const response = await axios.post("http://localhost:5000/loginform", data)
      console.log("reponse:", response.data)
      if (response.data.body === "Success") {
        sessionStorage.setItem("username", response.data.username);
        sessionStorage.setItem("usertype", response.data.usertype);
        console.log(sessionStorage.getItem("username"));
        console.log(sessionStorage.getItem("usertype"));
        navigate('/dashboard')
      }
      else {
        setMessage("Username or password not correct")
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
              Email
            </label>
            <input type="email" id="form2Example1" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <input type="password" id="form2Example2" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='text-center'>
            <button id="Signin" style={buttonstyle} onClick={handleSubmit}>
              Sign in
            </button>
            <Link to="/register">
              <button type="button" id="Register" style={buttonstyle}>
                Register
              </button>
            </Link>
          </div>
          <p>{message}</p>
        </form>
      </div>
    </div>
  )
}
