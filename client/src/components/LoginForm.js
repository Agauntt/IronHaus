import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import "../Style.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert("User: " + this.state.username + "    Pass: " + this.state.password);
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { id, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [id]: value
    });
  };

  handleFormSignup = event => {
    event.preventDefault();
    document.location.href = "/Sign-up";
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "35px" }} className="container">
        <form>
          <div className="form-group">
            <input
              style={{ textAlign: "center" }}
              type="email"
              className="form-control"
              value={this.state.username}
              onChange={this.handleInputChange}
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              style={{ textAlign: "center" }}
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleInputChange}
              id="password"
              placeholder="Password"
            />
          </div>
          <button onClick={this.handleFormSubmit} type="submit" className="btn btn-dark">
            Login
          </button>
          {" | "}

          <button onClick={this.handleFormSignup} type="submit" className="btn btn-dark">
            Sign-up
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
