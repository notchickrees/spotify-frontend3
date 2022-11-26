import React, { useState } from "react";
import './registrationForm.css'
function RegistrationForm() {
  const [userName, setUserName] = useState(null);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const checkValues = (e) => {
    e.preventDefault();
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
    }
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
    <div>
      <div className="text-center my-4">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="spotify logo"
      />
      <h2 id="header">Sign up for free to start <br /> listening.</h2>
      </div>
      <hr/>  
      <div className="signupform">
        <form
          onSubmit={checkValues}
          action="http://localhost:5000/form"
          method="POST"
        >
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label mb-0">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <div id="nameHelp" class="form-text">
              Choose your display name.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label" className="mb-0">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" class="form-text">
              Your email will be kept confidential.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label mb-0">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div id="emailHelp" class="form-text">
              Choose a strong password.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label mb-0">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div id="emailHelp" class="form-text">
              Please retype your password.
            </div>
          </div>
          <div className="text-center">
          <button type="submit" style={buttonstyle}>
            Sign Up
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RegistrationForm;
