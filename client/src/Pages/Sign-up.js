/* eslint-disable default-case */
import React from "react";
import logo from "../IronHausLogo.png";

import FormUserDetails from "../Components/FormUserDetails";
import FormPersonalDetails from "../Components/FormPersonalDetails";

class SignUp extends React.Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
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

  // sets the gender state based on radio input
  genderSelect = event => {
    const { target } = event.target;
    const { gender } = this.state;
    console.log({ event });
    }


  // For now, this just logs the state for debugging
  submit = () => {
    alert("Logging state:  First: " + this.state.firstName +
          "Last: " + this.state.lastName + 
          "pass: " + this.state.password + 
          "height" + this.state.height + 
          "weight" + this.state.weight + 
          "age: " + this.state.age +
          "gender: " + this.state.gender);
  }

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      password,
      height,
      weight,
      age,
      gender,
      profile,
      goals
    } = this.state;
    const values = {
      firstName,
      lastName,
      password,
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
            <div className="heading">
              <img style={{ marginLeft: "10px" }} alt="IronHaus" src={logo} />
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
            <div className="heading">
              <img style={{ marginLeft: "10px" }} alt="IronHaus" src={logo} />
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
      //   case 3:
      //     return (
      //       <FormUserCreds
      //         nextStep={this.nextStep}
      //         handleInputChange={this.handleInputChange}
      //         values={values}
      //       />
      //     );
    }

    return (
      <div>
        <div className="heading">
          <img style={{ marginLeft: "10px" }} alt="IronHaus" src={logo} />
        </div>
        <h3 style={{ textAlign: "center", fontSize: "30px", marginTop: "15px" }}>Welcome</h3>
      </div>
    );
  }
}

export default SignUp;
