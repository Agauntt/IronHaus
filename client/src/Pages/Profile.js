import React from "react";
import logo from "../IronHausLogo.png";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="heading">
          <img alt="IronHaus" src={logo} />
        </div>
        <h3 style={{ textAlign: "center", fontSize: "30px", marginTop: "15px" }}>
          Welcome Profile
        </h3>
        <strong>This is the profile page</strong>
      </div>
    );
  }
}

export default Profile;
