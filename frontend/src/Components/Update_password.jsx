import { useState } from "react";
import "./Update_password.css"

function UpdatePassword() {
  const [formInput, setFormInput] = useState({
    old_password: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    old_password: "",
    password: "",
    confirmPassword: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {
      old_password: "",
      password: "",
      confirmPassword: "",
    };

    if (formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return;
    }

    setFormError(inputError);
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

  const header={
    fontFamily: "Bold",
    padding: "30px",
    fontSize: "40px"
  }

  return (
    <div className="container my-3">
      <h4 className="title text-center" style={header}>Reset Password</h4>
      <div className="updatepassword">
        <form
          onSubmit={validateFormInput}
          action="http://localhost:5000/form"
          method="POST"
        >
          <p className="label mb-0">Old Password</p>
          <input
            name="password"
            type="password"
            className="form-control"
          />
          <p className="error-message">{formError.email}</p>

          <p className="label mb-0">New Password</p>
          <input
            value={formInput.password}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            name="password"
            type="password"
            className="form-control"
          />
          <p className="error-message">{formError.password}</p>

          <div className="form-outline"> 
          <label className="form-label" htmlFor="form2Example2">Confirm Password</label>
          <input
            value={formInput.confirmPassword}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            name="confirmPassword"
            type="password"
            className="form-control"
          />
          </div>

          <p className="error-message">{formError.confirmPassword}</p>
          
          <div className="text-center">
          <button type="submit" style={buttonstyle}>
            Change Password
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePassword;
