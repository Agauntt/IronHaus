/* eslint-disable default-case */
import React from "react";
import Axios from 'axios';
import NavBar from '../Containers/NavBar';
import ProfileCard from '../Containers/ProfileCard';
import Feed from '../Containers/Feed';
import NewWorkout from '../Containers/NewWorkout'

class Profile extends React.Component {
  state = {
    id: "",
    name: "",
    height: "",
    weight: "",
    age: "",
    gender: "",
    goals: "",
    step: 1
  }

  componentDidMount = () => {
    const url = window.location.pathname;
    const userID = url.replace("/profile/id=", '').replace("%7D", '');

    this.setState({
      id: userID
    });
      this.pullUser(userID)
      // console.log(userID);
  }

  pullUser = async e => {
    let res = await Axios.get('/users/' + e)
    let { data } = await res;
    this.setState({
      name: data.name,
      weight: data.weight,
      height: data.height,
      age: data.age,
      goals: data.goals,
      email: data.email
    })
  }

  setPage = data => {
    console.log(data)
  }

  handleNewWorkout = () => {
    console.log('test');
    if(this.state.step === 1){
      this.setState({
        step: 2
      })
    } else {
      this.setState({
        step: 1
      })
    }
  };

  render() {
    const { step } = this.state;
    const { email, name} = this.state
    switch (step) {
      case 1:
      return (
        <div>
          <NavBar 
          name={ this.state.name }
          handleNewWorkout={this.handleNewWorkout}
          />
          <div style={{display: 'flex'}}>
          <ProfileCard 
          name= {this.state.name}
          height= { this.state.height } 
          weight= { this.state.weight } 
          age= { this.state.age } 
          goals= { this.state.goals } 
          /> 
        <Feed />
     
        </div>
      </div>
    );
      case 2:
    return (
      <div>
        <NavBar 
          name={ this.state.name }
          handleNewWorkout={this.handleNewWorkout}
          />
          <div style={{display: 'flex'}}>
          <ProfileCard 
          name= {this.state.name}
          height= { this.state.height } 
          weight= { this.state.weight } 
          age= { this.state.age } 
          goals= { this.state.goals } 
          /> 
          <NewWorkout 
          {...this.state}
          closePost={this.handleNewWorkout}/>

        </div>
      </div>
    );
      }
    }
  }


export default Profile;
