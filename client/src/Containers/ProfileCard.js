import React from "react";
import "../Style.css";
import avatar from "../assets/male1.jpg";

class ProfileCard extends React.Component {
  render() {
    const { name, weight, height, age, goals } = this.props;
    return (
      <div class="profile-card">
        <div class="card flex-row flex-wrap">
          <div class="card-header">
            <img style={{}} src={avatar} className="avatar" alt="" />
          </div>
          <div class="card-block px-2">
            <h4 class="card-title">{name}</h4>
            <div class="card-text w-90">
              <li>Current weight: {weight} lbs</li>
              <li>Height: {height}''</li>
              <li>Age: {age} yrs </li>
              <li>Fitness Goals: {goals} </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
