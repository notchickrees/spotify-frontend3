import { useState } from "react";
import "./Update_password.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdatePassword() {
  const navigate = useNavigate();
  const [old_password, setold_password] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      alert("Email cannot be empty");
    } else if (!old_password) {
      alert("Old password cannot be empty");
    } else if (!newpassword) {
      alert("New Password cannot be empty");
    } else if (!confirmPassword) {
      alert("Confirm Password cannot be empty");
    } else if (newpassword !== confirmPassword) {
      alert("The passwords do not match, please retype.");
      setNewPassword("");
      setConfirmPassword("");
    } else if (newpassword.length < 8) {
      alert("The password must be at least 8 characters long.");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      const data = {
        email: email,
        oldPassword: old_password,
        newPassword: newpassword,
      };
      console.log(data);
      const response = await axios.post(
        "https://spotify-clone-group2.herokuapp.com/updatepassword",
        data
      );
      // console.log("reponse:", response.data);
      if (response.data.body === "Success") {
        navigate("/dashboard");
      } else {
        setMessage("Old password incorrect");
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

  const header = {
    fontFamily: "Bold",
    padding: "30px",
    fontSize: "40px",
  };

  return (
    <div className="container my-3">
      <h4 className="title text-center" style={header}>
        Reset Password
      </h4>
      <div className="updatepassword">
        <form>
          <p className="label mb-0">Email</p>
          <input
            name="email"
            type="email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p className="label mb-0">Old Password</p>
          <input
            name="password"
            type="password"
            className="form-control mb-3"
            value={old_password}
            onChange={(e) => setold_password(e.target.value)}
          />

          <p className="label mb-0">New Password</p>
          <input
            value={newpassword}
            onChange={(e) => setNewPassword(e.target.value)}
            name="password"
            type="password"
            className="form-control mb-3"
          />
          <div className="form-outline">
            <label className="form-label mb-0" htmlFor="form2Example2">
              Confirm Password
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
              type="password"
              className="form-control mb-3"
            />
          </div>
          <div className="text-center">
            <button type="submit" style={buttonstyle} onClick={handleSubmit}>
              Change Password
            </button>
          </div>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}

export default UpdatePassword;
