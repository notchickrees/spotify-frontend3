import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  return (
    <>
    <h1 className='text-center my-5'>Welcome!</h1>
    <div className="d-flex align-items-center justify-content-center">
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

          <div className="col">
            <Link to="/updatepassword">
              <a href="#!">Forgot password?</a>
            </Link>
          </div>
        </div>
        <div className='text-center'>
        <button type="submit" id= "Signin" className="btn btn-primary p-2 m-2">
          Sign in
        </button>
        <Link to= "/register">
          <button type="button" id= "Register" className="btn btn-primary p-2 m-2">
            Register
          </button>
        </Link>
        </div>
      </form>
    </div>
    </>
  )
}
