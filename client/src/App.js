import React from "react";
import "./Style.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import SignUp from "./Pages/Sign-up";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <div className="wrapper" >
        <Route path="/" exact={true} component={Home} />
        <Route path="/profile" exact={false} component={Profile} />
        <Route path="/Sign-up" exact={true} component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
