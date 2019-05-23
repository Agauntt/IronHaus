import React from "react";
import Axios from 'axios';
import NavBar from '../Components/NavBar';
import ProfileCard from '../Components/ProfileCard';
import Feed from '../Components/Feed';

class Profile extends React.Component {
  state = {
    id: "",
    name: "",
    height: "",
    weight: "",
    age: "",
    gender: "",
    goals: ""
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
    let res = await Axios.get('/user/' + e)
    let { data } = await res;
    console.log(data.name);
    this.setState({
      name: data.name,
      weight: data.weight,
      height: data.height,
      age: data.age,
      goals: data.goals
    })
  }

  setPage = data => {
    console.log(data)
  }

  render() {
    return (
      <div>
        <NavBar name={ this.state.name }/>
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
  }
}

export default Profile;
