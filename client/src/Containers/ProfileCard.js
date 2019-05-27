import React from 'react';
import { Image, Card } from 'react-bootstrap';
import '../Style.css';
import avatar from '../assets/male1.jpg';

class ProfileCard extends React.Component {
    render (){
        const { name, weight, height, age, goals } = this.props;
    return (
        <div>
            <Card className="profile-card" style={{ width: '16rem' }}>
            <div style={{textAlign: 'center'}} >
                <Image src={ avatar } className="avatar"/>
            </div>
  <Card.Body>
    <Card.Title style={{ textAlign: 'center' }}>{ name }</Card.Title>
        <Card.Text>
            <li>Current weight: { weight } lbs</li> 
            <li>Height: { height }''</li> 
            <li>Age: { age } yrs </li> 
            <li>Fitness Goals: { goals } </li> 
        </Card.Text>
    </Card.Body>
    </Card>
        </div>
    )
    }
}


export default ProfileCard;
