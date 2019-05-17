import React from "react";
import logo from "../IronHausLogo.png"

class Home extends React.Component {
    state = {
        userName: "",
        Password: "",
    }

    render () {
        return (
            <div>
            <div className="heading">
                <img alt="IronHaus" src={logo}/>
            </div>
            <h3 style={{textAlign:"center", fontSize:"30px"}}>Welcome Home</h3>
            </div>
        )
    }
}

export default Home;