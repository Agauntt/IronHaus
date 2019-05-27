import React, { Component } from 'react';
import '../Style.css';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class NewWorkout extends Component {
    state = {
        lift: "",
        sets: "",
        reps: "",
        weight: "",
        notes: "",
        owner: this.props.email,
        name: this.props.name
    }

    // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { id, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [id]: value
    });
  };

  submitWorkout = () => {
    axios.post('/workouts', {
        lift: this.state.lift,
        sets: this.state.sets,
        reps: this.state.reps,
        weight: this.state.weight,
        notes: this.state.notes,
        owner: this.state.owner,
        owner_name: this.state.name
    })
         .then(this.props.closePost)
  }


    render() {
        return (
            <div>
            <Form className="workout-form">
            <div className='container'>
            <Form.Group style={{marginTop: '10px'}}>
                <Form.Control 
                onChange={this.handleInputChange} 
                value={this.state.lift} 
                id='lift' type="text" 
                placeholder="Name of Lift" />
            </Form.Group>
            <Form.Group style={{marginTop: '10px', inputFormat}} >
                <Form.Control 
                onChange={this.handleInputChange} 
                value={this.state.sets}  
                id='sets' type="number" 
                placeholder="Number of Sets" />
            </Form.Group>  
            <Form.Group>
                <Form.Control 
                onChange={this.handleInputChange} 
                value={this.state.reps} 
                id="reps" type="number" 
                placeholder="Number of Reps" />
            </Form.Group>  
            <Form.Group>
                <Form.Control 
                onChange={this.handleInputChange} 
                value={this.state.weight} 
                id='weight' type="number" 
                placeholder="Weight" />
            </Form.Group>  
            <Form.Group>
                <Form.Control 
                onChange={this.handleInputChange} 
                value={this.state.notes} 
                id='notes' as="textarea" 
                rows="3" placeholder="Notes:" />
            </Form.Group>
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