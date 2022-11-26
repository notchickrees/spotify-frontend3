import React, { useState } from "react";
import "./registrationForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    if (!userName) {
      alert("Username Cannot be empty");
    } else if (!email) {
      alert("Email Cannot be empty");
    } else if (!password) {
      alert("Password Cannot be empty");
    } else if (!confirmPassword) {
      alert("Confirm Password cannot be empty");
    } else if (password !== confirmPassword) {
      alert("The passwords do not match, please retype.");
      setPassword("");
      setConfirmPassword("");
    }
    else if(password.length < 8){
      alert("The password must be at least 8 characters long.");
      setPassword("");
      setConfirmPassword("");
    } else {
      const data = {
        username: userName,
        email: email,
        password: password,
      };
      const response = await axios.post("http://localhost:5000/register", data);
      console.log("reponse:", response.data);
      if (response.data.body === "Success") {
        navigate("/login");
      } else {
        setMessage("Email or username already exists");
      }
    }
  }

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
    textDecoration: "none",
    alignText: "center",
  };

  return (
    <div>
      <div className="text-center my-4">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
          alt="spotify logo"
        />
        <h2 id="header">
          Sign up for free to start <br /> listening.
        </h2>
      </div>
      <hr />
      <div className="signupform">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label mb-0">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail3"
              aria-describedby="emailHelp"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <div id="nameHelp" className="form-text">
              Choose your display name.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label mb-0">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              Your email will be kept confidential.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label mb-0">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              Choose a strong password.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label mb-0">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              Please retype your password.
            </div>
          </div>
          <div className="text-center">
            <button type="submit" style={buttonstyle} onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}
export default RegistrationForm;
