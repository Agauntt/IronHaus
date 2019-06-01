import React from "react";
import "../Style.css";
import avatar from "../assets/male1.jpg";

class ProfileCard extends React.Component {
  render() {
    const { name, weight, height, age, goals } = this.props;
    return (
      <div className="profile-card">
        <div className="card flex-row flex-wrap">
          <div className="card-header">
            <img style={{}} src={avatar} className="avatar" alt="" />
          </div>
          <div className="card-block px-2">
            <h4 className="card-title">{name}</h4>
            <div className="card-text w-90">
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
