import { useState } from "react";

const login = {
  width: "400px",
  margin: "30px auto",
  minHeight: "200px",
  boxSizing: "border-box",
};

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

  return (
    <div className="container my-3">
      <div style={login}>
        <div className="App-container">
          <div className="card">
            <div className="card-header">
              <h4 className="title">Change Password</h4>
            </div>

            <div className="card-body">
              <form onSubmit={validateFormInput} action='http://localhost:5000/form' method='POST'>
                <p className="label">Old Password</p>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Old Password"
                />
                <p className="error-message">{formError.email}</p>

                <p className="label">New Password</p>
                <input
                  value={formInput.password}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <p className="error-message">{formError.password}</p>

                <p className="label">Confirm Password</p>
                <input
                  value={formInput.confirmPassword}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  name="confirmPassword"
                  type="password"
                  className="input"
                  placeholder="Confirm Password"
                />

                <p className="error-message">{formError.confirmPassword}</p>

                <div id="passwordHelpBlock" class="form-text">
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </div>
                <div className="d-grid gap-2 col-3 mx-auto">
                  <input
                    type="submit"
                    className="btn btn-primary my-3"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePassword;
