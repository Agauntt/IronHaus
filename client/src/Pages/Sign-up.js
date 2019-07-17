import React from "react";
import logo from "../assets/IronHausLogoWhite.png";
import "../Style.css";
import FormUserDetails from "../Components/FormUserDetails";
import FormPersonalDetails from "../Components/FormPersonalDetails";

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
    goals: "",
    errors: ""
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

  render() {
    const { step } = this.state;
    const { name, password, email, height, weight, age, gender, profile, goals } = this.state;
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
            <div style={{ textAlign: "center" }}>
              <img className="heading" style={{ marginLeft: "15px" }} alt="IronHaus" src={logo} />
            </div>
            <h3 style={{ textAlign: "center", fontSize: "30px", marginTop: "15px" }}>
              First, lets set up your account
            </h3>
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
          <div style={{ height: "105vh" }}>
            <div style={{ textAlign: "center" }}>
              <img className="heading" style={{ marginLeft: "10px" }} alt="IronHaus" src={logo} />
            </div>
            <h3 style={{ textAlign: "center", fontSize: "30px", marginTop: "15px" }}>
              Now tell us a little about yourself
            </h3>
            <FormPersonalDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleInputChange={this.handleInputChange}
              values={values}
              genderSelect={this.genderSelect}
            />
          </div>
        );
      default:
        return (
          <div>
            <div style={{ textAlign: "center" }}>
              <img className="heading" style={{ marginLeft: "15px" }} alt="IronHaus" src={logo} />
            </div>
            <h3 style={{ textAlign: "center", fontSize: "30px", marginTop: "15px" }}>
              First, lets set up your account
            </h3>
            <FormUserDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleInputChange={this.handleInputChange}
              values={values}
            />
          </div>
        );
    }
  }
}

export default SignUp;
