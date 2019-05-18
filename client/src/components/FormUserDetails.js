import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div style={{ width: "50%" }} className="container">
        <Form style={{ textAlign: "center" }}>
          <br />
          <Input
            style={{ textAlign: "center" }}
            type="text"
            name="firstName"
            id="firstName"
            placeholder="first name"
          />
          <br />
          <Input
            style={{ textAlign: "center" }}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="last name"
          />
          <br />
          <Input
            style={{ textAlign: "center" }}
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
          <br />
          <Button onClick={this.back}>Back</Button> <Button onClick={this.continue}>Next</Button>
        </Form>
      </div>
    );
  }
}

export default FormUserDetails;
