import React, { Component } from "react";
import "../Style.css";
import { Button, Form, Input } from "reactstrap";

class FormUserDetails extends Component {
  state = {
    c_password: "",
    msg: "Passwords must match to continue",
    error: true
  };

  continue = e => {
    const { values } = this.props;
    e.preventDefault();
    if (values.name === "" || values.email === "" || values.password === "") {
      this.setState({
        msg: "Please fill out all fields to continue"
      });
      return;
    }
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  toLogin = e => {
    e.preventDefault();
    document.location.href = "/";
  };

  InputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { id, value } = event.target;
    this.props.handleInputChange(event);
    // Set the state for the appropriate input field
    this.setState({
      [id]: value
    });
  };

  passwordCheck = e => {
    e.preventDefault();
    const { values } = this.props;
    const { value } = e.target;
    this.setState(
      {
        c_password: value
      },
      () => {
        // console.log(this.state.c_password);
        if (values.password === this.state.c_password) {
          this.setState({
            msg: "",
            error: false
          });
          this.disableBtn(false);
        } else {
          this.setState({
            msg: "passwords do not match"
          });
          this.disableBtn(true);
        }
      }
    );
  };

  disableBtn = e => {
    if (e === true) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    const { values, handleInputChange } = this.props;
    return (
      <div className="container text-center loginFormCSS">
        <Form style={{ textAlign: "center" }}>
          <Input
            style={{ textAlign: "center" }}
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            onChange={handleInputChange}
            defaultValue={values.name}
          />
          <br />
          <Input
            style={{ textAlign: "center" }}
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={handleInputChange}
            defaultValue={values.email}
          />
          <br />
          <Input
            style={{ textAlign: "center" }}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={this.InputChange}
            defaultValue={values.password}
          />
          <br />
          <Input
            style={{ textAlign: "center" }}
            type="password"
            name="test-password"
            id="c_password"
            value={this.state.c_password}
            placeholder="confirm password"
            onChange={this.passwordCheck}
          />
          <strong style={{ color: "gold" }}>{this.state.msg}</strong>
          <br />
          <Button onClick={this.toLogin}>Back to login</Button>{" "}
          <Button disabled={this.state.error} onClick={this.continue}>
            Next
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormUserDetails;
