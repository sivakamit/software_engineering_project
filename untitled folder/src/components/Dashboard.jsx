import React from "react";
import { Link } from "react-router-dom";
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="backgroundLogin"> </div>
        <div className="Dashboard">
          <div className="mercury-logologin" />
          <form>
            <div>
              <div>
              <label htmlFor="userName" className="control-Element">
                Select Education Level:
              </label>
              </div>
              <input
                type="radio"
                className="login-control"
                value="secondary"
                name="secondary"
                aria-describedby="emailHelp"
              /> Secondary<br/>
              <input
                type="radio"
                className="login-control"
                value="underGraduate"
                name="underGraduate"
                aria-describedby="emailHelp"
              /> Under Graduate<br/>
              <input
                type="radio"
                className="login-control"
                value="graduate"
                name="graduate"
                aria-describedby="emailHelp"
              /> Graduate<br/><br/>
              </div>
              <div>
              <div>
              <label htmlFor="userName" className="control-Element">
                Select Game Experience:
              </label>
              </div>
              <input
                type="radio"
                className="login-control"
                value="experimantal"
                name="experimental"
                aria-describedby="emailHelp"
              /> Experimental Gaming<br/>
              <input
                type="radio"
                className="login-control"
                value="quiz"
                name="quiz"
                aria-describedby="emailHelp"
              /> Quiz<br/>
              <input
                type="radio"
                className="login-control"
                value="2dgame"
                name="2dgame"
                aria-describedby="emailHelp"
              /> 2-D Gaming<br/><br/>
              </div>
              <div>
              <div>
              <label htmlFor="userName" className="control-Element">
                Select Game Mode:
              </label>
              </div>
              <input
                type="radio"
                className="login-control"
                value="single"
                name="single"
                aria-describedby="emailHelp"
              /> Single Player<br/>
              <input
                type="radio"
                className="login-control"
                value="multi"
                name="multi"
                aria-describedby="emailHelp"
              /> Multi Player<br/><br/>
              </div>
            <Link type="button" className="submitLogin" to="gameSelect" >Let's Go!</Link>
          </form>
          <br/><center><Link to="login" >Go Home</Link></center>
          <div className="clear" />
        </div>
      </div>
    );
  }
}
export default Dashboard;
