/* eslint-disable default-case */
import React from "react";
import logo from "../IronHausLogo.png";
import "../Style.css";

import FormUserDetails from "../Components/FormUserDetails";
import FormPersonalDetails from "../Components/FormPersonalDetails";
import Axios from "axios";

class SignUp extends React.Component {
  state = {
    step: 1,
    name: "",
    email: "",
    password: "",
    height: "",
    weight: "",
    age: "",
    gender: "",
    profile: "",
    goals: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
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


  submit = () => {
    console.log('new user: ' + this.state);
    Axios.post('/users', {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        height: this.state.height,
        weight: this.state.weight,
        age: this.state.age,
        goals: this.state.goals
      })
      .then()
      .catch(err => console.log(err));  
  }

  render() {
    const { step } = this.state;
    const {
      name,
      password,
      email,
      height,
      weight,
      age,
      gender,
      profile,
      goals
    } = this.state;
    const values = {
      name,
      password,
      email,
      height,
      weight,
      age,
      gender,
      profile,
      goals
    };

    switch (step) {
      case 1:
        return (
          <div>
            <div style={{textAlign: "center"}}>
              <img className="heading" style={{ marginLeft: "15px" }} alt="IronHaus" src={logo} />
            </div>
            <h3 style={{ textAlign: "center", fontSize: "30px", marginTop: "15px" }}>First, lets set up your account</h3>
            <FormUserDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleInputChange={this.handleInputChange}
              values={values}
              
            />
          </div>
        );
      case 2:
        return (
          <div>
            <div style={{textAlign: "center"}}>
              <img className="heading" style={{ marginLeft: "10px" }} alt="IronHaus" src={logo} />
            </div>
            <h3 style={{ textAlign: "center", fontSize: "30px", marginTop: "15px" }}>Now Tell us a little about yourself</h3>
            <FormPersonalDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleInputChange={this.handleInputChange}
              values={values} 
              genderSelect={this.genderSelect}
              submit = {this.submit}
              />
          </div>
        );
    }
  }
}

export default SignUp;
