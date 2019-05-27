import React, { Component } from "react";
import API from "../Utils/API";
import axios from "axios";
import { Link } from "react-router-dom";

import "../Style.css";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  // Login function - runs email and pass through passport auth
  handleFormSubmit = event => {
    event.preventDefault();
    axios.post("/users/login", {
      email: this.state.email,
      password: this.state.password
    }).then(function(res) {
      // console.log(res.data._id);
     // if valid info is passed back, log in user, else redirect to homepage
      if (res.data.email !== undefined) {
      
      document.location.href = `/profile/id=${res.data._id}}`;
    } else document.location.href = "/";
  })
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
      <div style={{ textAlign: "center", marginTop: "35px"}} className="container loginFormCSS">
        <form>
          <div className="form-group">
            <input
              style={{ textAlign: "center" }}
              type="email"
              className="form-control"
              onChange={this.handleInputChange}
              id="email"
              placeholder="email"
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
