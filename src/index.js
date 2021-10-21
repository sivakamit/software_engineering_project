import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Survey from "./components/Survey.jsx";
import Dashboard from "./components/Dashboard.jsx";
import GameSelect from "./components/GameSelect.jsx";

function App() {
  return (
    <Router>
      <Route path="/" component={Login} />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/survey" component={Survey} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/gameSelect" component={GameSelect} />
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
