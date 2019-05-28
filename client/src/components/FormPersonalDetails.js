import React, { Component } from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";

export class FormPersonalDetails extends Component {
  state = {
    msg: ""
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  submit = () => {
    document.location.href= "/";
    this.props.submit();
  };

  valueCheck = e => {
    e.preventDefault();
   const { values } = this.props;
    const {id, value} = e.target;
    let num = parseInt(value);
    console.log(num);
}

  lengthCheck = e => {
    const { values } = this.props 
    if(values.goals.length > 60) {
      this.setState({
        msg: 'Please keep answer under 75 characters'
      })
    } 
    this.props.handleInputChange(e);
  }


  render() {
    const { values, handleInputChange } = this.props;
    return (
      <div style={{ width: "60%" }} className="container">
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
        <FormGroup>
          <Input 
            type="text"
            id="goals"
            placeholder="What's your primary fitness goal?"
            name="goals"
            onChange={this.lengthCheck}
            maxLength='75'
            defaultValue={values.goals}
            />
            <p style={{color: 'red'}}>{ this.state.msg }</p>
        </FormGroup>
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
