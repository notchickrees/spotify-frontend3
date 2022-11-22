import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
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
      <form id="login" action='http://localhost:5000/form' method='POST'>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Email Address
          </label>
          <input type="email" id="form2Example1" name="email" className="form-control" />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input type="password" id="form2Example2" name="password" className="form-control"/>
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
        <button type="submit" id= "Signin" style={buttonstyle}>
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
