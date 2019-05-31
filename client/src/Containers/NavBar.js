import React from "react";

import logo from "../IronHausLogoWhite.png";

class NavBar extends React.Component {
  render() {
    const { handleNewWorkout } = this.props;
    return (
      <div className="Nav">
        <img src={logo} style={{ marginTop: "10px" }} className="logo" alt="IronHaus" />
        <button className="NavBtn" variant="outline" onClick={handleNewWorkout}>
          Record workout
        </button>{" "}
        <a href="/">
          <button className="NavBtn " variant="outline">
            Log Out
          </button>
        </a>
      </div>
    );
  }
}
export default NavBar;
