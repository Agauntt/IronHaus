import React, { Component } from "react";
import { Button, Form, FormGroup, Input, FormText } from "reactstrap";

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
    const { values, handleInputChange} = this.props;
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
            onChange={handleInputChange}
            defaultValue = {values.firstName}
          />
          <br />
          <Input
            style={{ textAlign: "center" }}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="last name"
            onChange={handleInputChange}
            defaultValue = {values.lastName}
          />
          <br />
          <Input
            style={{ textAlign: "center" }}
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={handleInputChange}
            defaultValue = {values.password}
          />
          <br />
          <Button onClick={this.back}>Back</Button> <Button onClick={this.continue}>Next</Button>
        </Form>
      </div>
    );
  }
}

export default FormUserDetails;
