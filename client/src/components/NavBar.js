import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../Style.css';
import logo from '../IronHausLogo.png';


 class NavBar extends React.Component {
     render() {
     const { name } = this.props;
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
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='new-workout-btn'>
                <a href='#' style={{textDecoration: 'underline'}}>New Workout</a>
            </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
      </div>
    )
}
 }
export default NavBar;