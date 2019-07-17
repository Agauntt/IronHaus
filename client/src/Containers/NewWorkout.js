import React, { Component } from "react";
import "../Style.css";
import axios from "axios";
import { Input, Button } from "reactstrap";

class NewWorkout extends Component {
  state = {
    owner: this.props.email,
    name: this.props.name,
    lifts: "",
    sets: [{ reps: "", weight: "" }],
    msg: ""
  };

  // handle any changes to the input fields
  handleInputChange = e => {
    // Trims 'form-control' out of the target's className
    let tClass = e.target.className.replace(" form-control", "");
    // If the classname of the target is "lifts", sets the lift state to the target value
    if (tClass === "lifts") {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    // If the className of the target is not lifts, sets the respective set's weight or rep value based on the targets
    // dataset ID, className, and value
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

  removeSet = e => {
    var id = (e.target.id);
    var p = this.state.sets;
    p.splice(id, 1)
    this.setState({ sets: p })
  }

  submitWorkout = e => {
    e.preventDefault();
    for(var i = 0; i < this.state.sets.length; i++) {
      if (
        this.state.lifts === "" ||
        this.state.sets[i].reps === "" ||
        this.state.sets[i].weight === ""
      ) {
        this.setState({
          msg: "Please fill out all fields"
        });
        return;
      };
      if (i = this.state.sets.length) {
        axios
          .post("/api/workouts", {
            formData: this.state
          })
          .then(this.props.closePost);
      }
    }
  };

  test = () => {
    console.log(this.state.sets[0].reps);
  };

  render() {
    let { sets } = this.state;
    return (
      <div className='workout-form-container'>
        <form>
          <div className="workout-form">
            <div className="container">
              <strong style={{ textAlign: "center", color: "gold" }}>{this.state.msg}</strong>
              <div className="row">
                <Input
                  className="lifts"
                  maxLength="25"
                  style={{ marginTop: "10px", marginLeft: "5px", display: "flex", width: "80%" }}
                  onChange={this.handleInputChange}
                  name="lifts"
                  id="lifts"
                  type="text"
                  placeholder="Name of Lift"
                />
              </div>
              {sets.map((val, idx) => {
                let repsId = `reps-${idx}`,
                  weightId = `weight-${idx}`;
                return (
                  <div key={idx} className="row">
                    <div className="col-4">
                      <Input
                        className="reps"
                        maxLength="5"
                        onChange={this.handleInputChange}
                        name={repsId}
                        data-id={idx}
                        id={repsId}
                        type="number"
                        placeholder="Reps"
                      />
                    </div>
                    <div className="col-4">
                      <Input
                        className="weight"
                        maxLength="5"
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
                    <h1
                      onClick={this.removeSet}
                      id={idx}
                      style={{
                        marginLeft: "10px",
                        color: "red",
                        verticalAlign: "center",
                        display: "flex"
                      }}
                    >
                      -
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Button 
              className='btn'
              style={{ marginBottom: "10px", marginTop: "0px" }} 
              onClick={this.submitWorkout}>
              Submit
            </Button>
            <Button
              className=''
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
