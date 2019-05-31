import React, { Component } from "react";
import "../Style.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

class NewWorkout extends Component {
  state = {
    owner: this.props.email,
    name: this.props.name,
    lifts: "",
    sets: [{ reps: "", weight: "" }]
  };

  // handle any changes to the input fields
  handleInputChange = e => {
    let tClass = e.target.className.replace(" form-control", "");
    if (tClass === "lifts") {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    } else if (tClass === "reps" || "weight") {
      let sets = [...this.state.sets];
      sets[e.target.dataset.id][tClass] = e.target.value;
      this.setState({ sets });
    }
  };

  addSet = () => {
    this.setState(prevState => ({
      sets: [...prevState.sets, { reps: "", weight: "" }]
    }));
  };

  submitWorkout = () => {
    if (
      this.state.lifts === "" ||
      this.state.sets[0].reps === "" ||
      this.state.sets[0].weight === ""
    ) {
      alert("Please fill out all fields");
      return;
    } else {
      axios
        .post("/api/workouts", {
          formData: this.state
        })
        .then(this.props.closePost);
    }
  };

  test = () => {
    console.log(this.state.sets[0].reps);
  };

  render() {
    let { sets } = this.state;
    return (
      <div>
        <form>
          <div className="workout-form">
            <div className="container">
              <div className="row">
                <input
                  className="form-control lifts"
                  style={{ marginTop: "10px", marginLeft: "5px", display: "flex", width: "80%" }}
                  onChange={this.handleInputChange}
                  name="lifts"
                  id="lifts"
                  type="text"
                  placeholder="Name of Lift"
                />
                {/* <h1
                  onClick={this.test}
                  style={{ display: "flex", color: "green", marginLeft: "10px" }}
                >
                  +
                </h1> */}
              </div>
              {sets.map((val, idx) => {
                let repsId = `reps-${idx}`,
                  weightId = `weight-${idx}`;
                return (
                  <div key={idx} className="row">
                    <div className="col-4">
                      <input
                        className="form-control reps"
                        onChange={this.handleInputChange}
                        name={repsId}
                        data-id={idx}
                        id={repsId}
                        type="number"
                        placeholder="Reps"
                      />
                    </div>
                    <div className="col-4">
                      <input
                        className="form-control weight"
                        onChange={this.handleInputChange}
                        name={weightId}
                        data-id={idx}
                        id={weightId}
                        type="number"
                        placeholder="Weight"
                      />
                    </div>
                    <h1
                      onClick={this.addSet}
                      style={{
                        marginLeft: "10px",
                        color: "green",
                        verticalAlign: "center",
                        display: "flex"
                      }}
                    >
                      +
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Button style={{ marginBottom: "10px", marginTop: "0px" }} onClick={this.submitWorkout}>
              Submit
            </Button>
            <Button
              style={{ marginBottom: "10px", marginTop: "0px", marginLeft: "10px" }}
              onClick={this.props.closePost}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewWorkout;
