import React, { Component } from 'react';
import '../Style.css';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class NewWorkout extends Component {
    state = {
        owner: this.props.email,
        name: this.props.name,
        lifts: "",
        sets: [{reps: "", weight: ""}]
    }

    // handle any changes to the input fields
    handleInputChange = (e) => {
        let tClass = e.target.className.replace(" form-control", "");
        if (tClass === "lifts"){
            this.setState({ [e.target.name]: e.target.value })
        }
        else if (tClass === "reps" || "weight") {
          let sets = [...this.state.sets]   
          sets[e.target.dataset.id][tClass] = e.target.value
          this.setState({ sets })
        } 
      }

  addSet = () => {
      this.setState((prevState) => ({
          sets: [...prevState.sets, {reps: "", weight: ""}],
      }));
  }

  submitWorkout = () => {
    axios.post('/workouts', 
        {
            formData: this.state
        })
         .then(this.props.closePost)
  }

  test = () => {
      console.log("hello")
  }


    render() {
        let { sets } = this.state
        return (
            <div>
            <Form className="workout-form">
            <div className='container'>
            <Form.Group style={{marginTop: '10px', display: 'flex'}}>
                <Form.Control 
                onChange={this.handleInputChange} 
                className="lifts"
                name="lifts"
                id='lifts' type="text" 
                placeholder="Name of Lift" />
                <h1 onClick={this.test} style={{color: 'green', marginLeft: '10px'}}>+</h1>
            </Form.Group>
            {
                sets.map((val, idx) => {
                    let repsId = `reps-${idx}`, weightId = `weight-${idx}` 
                    return(
                    <div key={idx} className='row'>
                    <Form.Group className='col-4'>
                        <Form.Control 
                        onChange={this.handleInputChange}  
                        name={repsId}
                        data-id={idx}
                        id={repsId} 
                        className="reps"
                        type="number" 
                        placeholder="Reps" />
                    </Form.Group>  
                    <Form.Group className='col-4'>
                        <Form.Control 
                        onChange={this.handleInputChange} 
                        name={weightId}
                        data-id={idx}
                        id={weightId}
                        className="weight"
                        type="number" 
                        placeholder="Weight" />
                    </Form.Group>  
                    <h1 onClick={this.addSet} style={{color: 'green'}}>+</h1>
                    </div>
                 )})
            }
            </div>

            <div style={{textAlign: 'center'}}>
            <Button style={{marginBottom: '10px', marginTop: '0px'}} onClick={this.submitWorkout}>Submit</Button>
            <Button style={{marginBottom: '10px', marginTop: '0px', marginLeft: '10px'}} onClick={this.props.closePost}>Cancel</Button>
            </div>
            </Form>
            </div>
        )
    }
}

const inputFormat = {
    marginLeft: '15px!important',
    marginRight: '15px!important'
}

export default NewWorkout