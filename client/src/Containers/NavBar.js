import React from "react";
import icons from "glyphicons";
import logo from "../IronHausLogoWhite.png";

class NavBar extends React.Component {
  render() {
    const { handleNewWorkout } = this.props;
    return (
      <div className="Nav row navbar-expand-lg">
        <div className="navbar-brand">
          <img src={logo} style={{ marginTop: "10px" }} className="logo" alt="IronHaus" />
        </div>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style={{ color: "rgb(192, 192, 192)" }} class="navbar-toggler-icon">
            {" "}
            {icons.menu}
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Log out
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#a" onClick={handleNewWorkout}>
                Record a workout
              </a>
            </li>
          </ul>
        </div>
        {/* <button className="NavBtn" variant="outline" >
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
