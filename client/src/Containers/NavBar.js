import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import logo from '../IronHausLogo.png';


 class NavBar extends React.Component {
     render() {
     const { handleNewWorkout } = this.props;
    return (
        <div>
            <strong>THis is a navbar</strong>
        <Navbar className="Nav">
        <Navbar.Brand  href="/">
            <img
            src={ logo }
            className="d-inline-block align-top logo"
            alt="IronHaus"
        />
        </Navbar.Brand>
        
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='new-workout-btn'>
            <Button className='NavBtn' variant='outline' onClick={handleNewWorkout}>Record workout</Button> {" "}
            <a href='/'><Button className='NavBtn' variant="outline">Log Out</Button></a>
            </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
      </div>
    )
}
 }
export default NavBar;