import React from "react";

import logo from "../IronHausLogoWhite.png";

class NavBar extends React.Component {
  render() {
    const { handleNewWorkout } = this.props;
    return (
      <div className="Nav navbar-expand-lg">
        <div className="navbar-brand">
          <img src={logo} style={{ marginTop: "10px" }} className="logo" alt="IronHaus" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style={{ color: "white" }} class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#a">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#a">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#a">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        {/* <button className="NavBtn" variant="outline" onClick={handleNewWorkout}>
          Record workout
        </button>{" "}
        <a href="/">
          <button className="NavBtn " variant="outline">
            Log Out
          </button>
        </a> */}
      </div>
    );
  }
}
export default NavBar;
