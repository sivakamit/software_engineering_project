import React from "react";
import { Link } from "react-router-dom";
import Register from "./Register.jsx";
import Login from "./Login.jsx";

class Survey extends React.Component {
  submitSurvey() {
    alert("Survey submitted!!");
  }
  render() {
    return (
      <div>
        <div className="backgroundLogin"> </div>
        <div className="LoginBox">
          <div className="mercury-logologin" />
          <form>
            <div className="UserLogin">
              <label htmlFor="userName" className="control-Element">
                Question 1
              </label>
              <input type="text" className="login-control" id="userName" />
            </div>
            <div className="UserLogin">
              <label htmlFor="userName" className="control-Element">
                Question 2
              </label>
              <input type="text" className="login-control" id="userName" />
            </div>
            <div className="UserLogin">
              <label htmlFor="userName" className="control-Element">
                Question 3
              </label>
              <input type="text" className="login-control" id="userName" />
            </div>
            <div className="UserLogin">
              <label htmlFor="userName" className="control-Element">
                Question 4
              </label>
              <input type="text" className="login-control" id="userName" />
            </div>
            <input
              type="button"
              className="submitLogin"
              value="Submit Survey"
              onClick={this.submitSurvey}
            />
            <br />
            <div className="row">
              <div className="col-sm-4">
                <Link to="/Login">Login</Link>
              </div>
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <Link to="/Register">Register</Link>
              </div>
            </div>
          </form>
          <div className="clear" />
        </div>
      </div>
    );
  }
}
export default Survey;
