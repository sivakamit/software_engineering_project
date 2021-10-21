import React from "react";
import { Link } from "react-router-dom";
import Survey from "./Survey.jsx";
import Login from "./Login.jsx";

class Register extends React.Component {
  registerUser() {
    alert("User Registered Successfully!");
  }
  render() {
    return (
      <div
        style={{
          backgroundImage: "./images/login-background.jpeg"
        }}
      >
        <div className="backgroundLogin"> </div>
        <div className="LoginBox">
          <div className="mercury-logologin" />
          <form>
            <div className="UserLogin">
              <label htmlFor="userName" className="control-Element">
                Email
              </label>
              <input
                type="email"
                className="login-control"
                id="userName"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="UserLogin">
              <label htmlFor="userpassword" className="control-Element">
                Password
              </label>
              <input
                type="password"
                className="login-control"
                id="userpassword"
              />
            </div>
            <div class="UserLogin">
              <label htmlFor="userpassword" className="control-Element">
                Confirm Password
              </label>
              <input
                type="password"
                className="login-control"
                id="userpassword"
              />
            </div>
            <input
              type="button"
              className="submitLogin"
              value="Register"
              onClick={this.registerUser}
            />
            <br />
            <div className="row">
              <div className="col-sm-4">
                <Link to="/Login">Login</Link>
              </div>
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <Link to="/Survey">Survey</Link>
              </div>
            </div>
          </form>
          <div className="clear" />
        </div>
      </div>
    );
  }
}
export default Register;
