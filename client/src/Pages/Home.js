import React from "react";
import logo from "../IronHausLogoWhite.png";
import LoginForm from "../Components/LoginForm";

class Home extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <img className="heading" style={{ marginLeft: "10px" }} alt="IronHaus" src={logo} />
        </div>
        <h3 style={{ textAlign: "center", fontSize: "30px", marginTop: "15px" }}>Welcome Home</h3>
        <LoginForm />
      </div>
    );
  }
}

export default Home;
