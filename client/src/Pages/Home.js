import React from "react";
import logo from "../IronHausLogo.png";
import LoginForm from "../components/LoginForm";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="heading">
          <img style={{ marginLeft: "10px" }} alt="IronHaus" src={logo} />
        </div>
        <h3 style={{ textAlign: "center", fontSize: "30px", marginTop: "15px" }}>Welcome Home</h3>
        <LoginForm />
      </div>
    );
  }
}

export default Home;
