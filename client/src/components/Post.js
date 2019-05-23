import React, { Component } from 'react'

class Post extends Component {
    state = {
        exercise: "bench press",
        sets: '2',
        weight: '185'
    }

    render() {
        return (
            <div style={{borderBottom: 'solid', borderWidth: '1px'}}>
                <div className='row'>
                    <div className='col-3'>
                        <h3 style={{textDecoration: 'underline'}}>Poster Name</h3>
                    </div>
                    <div className='col-9'>
                        <h5>{this.state.exercise}</h5>
                        <li style={{marginLeft: '15px'}}>Sets: {this.state.sets}</li>
                        <li style={{marginLeft: '15px'}}>Weight: {this.state.weight}</li>
                    </div>    
                </div>
            </div>
        )
    }
}

export default Post