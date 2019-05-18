import React, { Component } from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  submit = () => {
    this.props.submit();
  };

  render() {
    const { values, handleInputChange, genderSelect } = this.props;
    return (
      <div style={{ width: "60%"}} className="container">
        <Form style={{ textAlign: "center" }}>
        <Row form style= {{ inputMargins }}>
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
              <Input style={{ inputMargins }} type="number" name="weight" id="weight" placeholder="Weight (lbs)" defaultValue={values.weight} onChange={handleInputChange} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="number" name="age" id="age" placeholder="Age" defaultValue={values.age} onChange={handleInputChange} />
            </FormGroup>
          </Col>
        </Row>
        <Row style={{ textAlign: "center"}}>
        <FormGroup check >
          <Input 
            type="radio" 
            id="male"                 
            name="gender"
            onClick={genderSelect} />{' '}
              Male
        </FormGroup>
        <FormGroup>    
          <Input 
            type="radio" 
            id="female" 
            name="gender"
            onClick={genderSelect} />{' '}
          Female
          </FormGroup>
          </Row>
          <Button onClick={this.back}>Back</Button> 
          {" "}
          <Button onClick={this.submit}>Submit</Button>
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
}
export default FormPersonalDetails;
