import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../Style.css';
import logo from '../IronHausLogo.png';


 class NavBar extends React.Component {
     render() {
     const { handleNewWorkout } = this.props;
    return (
        <div>
        <Navbar className="Nav">
        <Navbar.Brand  href="/">
            <img
            src={ logo }
            className="d-inline-block align-top logo"
            alt="IronHaus"
        />
        </Navbar.Brand>
        <Navbar.Text >
            
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='new-workout-btn'>
            <Button variant='outline-dark' onClick={handleNewWorkout}>Record workout</Button> {" "}
            <a href='/'><Button variant="outline-dark">Log Out</Button></a>
            </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
      </div>
    )
}
 }
export default NavBar;