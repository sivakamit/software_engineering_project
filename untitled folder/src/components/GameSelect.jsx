import React from "react";
import { Link } from "react-router-dom";
class GameSelect extends React.Component {
  render() {
    return (
      <div>
        <div className="backgroundLogin"> </div>
        
        <div className="Dashboard">
        <div className="mercury-logologin" />
        <center><h4>Play your game!</h4></center>
          <div className="row">
              <div className="col-sm-6">
                  <center><a type="button" className="submitLogin" href="https://www.funbrain.com/games/tinybop-schools-simple-machines" >Game 1</a></center>
                </div>
                <div className="col-sm-6">
                  <center><a type="button" className="submitLogin" href="https://www.funbrain.com/games/log-run" >Game 2</a></center>
                </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                  <center><a type="button" className="submitLogin" href="https://www.funbrain.com/games/star-climber" >Game 3</a></center>
                </div>
                <div className="col-sm-6">
                  <center><a type="button" className="submitLogin" href="https://www.funbrain.com/games/dont-gross-out-the-world" >Game 4</a></center>
                </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                  <center><a type="button" className="submitLogin" href="https://www.funbrain.com/games/vine-time" >Game 5</a></center>
                </div>
                <div className="col-sm-6">
                  <center><a type="button" className="submitLogin" href="https://www.funbrain.com/games/desert-dive" >Game 6</a></center>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6"><center><Link type="button" className="submitLogin" to="dashboard" >Go Back</Link></center></div>
                <div className="col-sm-3"></div>
            </div>

            <br/><center><Link to="login" >Go Home</Link></center>
          <div className="clear" />
        </div>
      </div>
    );
  }
}
export default GameSelect;
