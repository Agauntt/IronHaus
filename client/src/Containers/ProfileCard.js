import React from "react";
import "../Style.css";
import avatar from "../assets/male1.jpg";

class ProfileCard extends React.Component {
  render() {
    const { name, weight, height, age, goals } = this.props;
    return (
      <div style={{ display: "inline-block" }}>
        <div className="profile-card" style={{ width: "16rem" }}>
          <div className="card-img-top" style={{ textAlign: "center" }}>
            <img src={avatar} alt="avatar" className="avatar" />
          </div>
          <div className="card-body">
            <div className="card-title" style={{ textAlign: "center" }}>
              {name}{" "}
            </div>
            <div>
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
