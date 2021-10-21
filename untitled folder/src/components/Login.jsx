import React from "react";
import { Link,Redirect } from "react-router-dom";
class Login extends React.Component {
  render() {
    
    return (
      <div>
        <div className="backgroundLogin"> </div>
        <div className="LoginBox">
          <div className="mercury-logologin" />
          <form>
            <div className="UserLogin">
              <label htmlFor="userName" className="control-Element">
                Username
              </label>
              <input
                type="email"
                className="login-control"
                id="userName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="UserLogin">
              <label htmlFor="userpassword" className="control-Element">
                Password
              </label>
              <input
                type="password"
                className="login-control"
                id="userpassword"
              />
            </div>
            <Link type="button" className="submitLogin"to="dashboard">Login</Link>
            <br />
            <div className="row">
              <div className="col-sm-4">
                <Link to="/Register">Register</Link>
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
export default Login;
