import React, { useState } from "react";
//import './style.css'
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

  return (
    <div>
      <nav class="bg-dark navbar-dark navbar">
        <div className="row col-12 d-flex justify-content-center text-white">
          <h3 class="text-center">Sign up for your Spotify account</h3>{" "}
        </div>
      </nav>
      <div className="container my-4 ">
        <form onSubmit={checkValues} action='http://localhost:5000/form' method='POST'>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
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
            <label for="exampleInputEmail1" class="form-label">
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
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name= "password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div id="emailHelp" class="form-text">
              Choose a strong password.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
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
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default RegistrationForm;
