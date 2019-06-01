import React, { Component } from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import Axios from "axios";

export class FormPersonalDetails extends Component {
  state = {
    msg: ""
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  submit = () => {
    const { values } = this.props;
    if (values.heigh === "" || values.weight === "" || values.age === "" || values.goals === "") {
      this.setState({
        msg: "Please fill out all fields to submit"
      });
      return;
    }

    console.log("new user: " + values);
    Axios.post("/api/users", {
      name: values.name,
      email: values.email,
      password: values.password,
      height: values.height,
      weight: values.weight,
      age: values.age,
      goals: values.goals
    })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      })
      .then((document.location.href = "/"));
  };

  lengthCheck = e => {
    const { values } = this.props;
    if (values.goals.length > 75) {
      this.setState({
        msg: "Please keep answer under 75 characters"
      });
    }
    this.props.handleInputChange(e);
  };

  render() {
    const { values, handleInputChange } = this.props;
    return (
      <div style={{ width: "60%" }} className="container">
        <Form style={{ textAlign: "center" }}>
          <Row form style={{ inputMargins }}>
            <Col md={4}>
              <FormGroup style={{ inputMargins }}>
                <Input
                  type="number"
                  name="height"
                  id="height"
                  placeholder="height"
                  defaultValue={values.height}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Input
                  style={{ inputMargins }}
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="Weight (lbs)"
                  defaultValue={values.weight}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Age"
                  defaultValue={values.age}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Input
              type="textarea"
              id="goals"
              placeholder="What's your primary fitness goal?"
              name="goals"
              onChange={this.lengthCheck}
              maxLength="75"
              rows="3"
              defaultValue={values.goals}
            />
            <strong style={{ color: "gold" }}>{values.msg}</strong>
          </FormGroup>
          <Button onClick={this.back}>Back</Button>{" "}
          <Button disabled={values.msg} onClick={this.submit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const inputMargins = {
  marginLeft: "5%!important",
  marginRight: "5%!important",
  color: "green!important",
  fontSize: "40px!important"
};
export default FormPersonalDetails;
