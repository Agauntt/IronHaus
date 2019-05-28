import React, { Component } from 'react'

class Post extends Component {

    test = () => {
        const { values } = this.props;
        console.log("poke " + values.name);
        console.log(values);
    }

    render() {
    const { values } = this.props;
        return (
            <div onClick={this.test} style={{border: 'solid', borderWidth: '2px', marginTop: '5px', marginBottom: '5px'}}>
                <div className='row'>
                    <div className='col-3'>
                        <h5 style={{marginLeft: '5px', textDecoration: 'underline'}}>{values.name}</h5>
                        {/* <br/>
                        <div style={{display: 'flex'}} className="">
                        <p style={{marginLeft: '5px', marginTop: 'auto'}}>Props: </p>
                        <button style={{width: '3rem', marginLeft: '15px', borderRadius: '50%'}}>give props</button>
                        </div> */}
                    </div>
                    <div className='col-9'>
                        <strong style={{marginLeft: '10px'}}> { values.lifts } </strong>                      
                        <li style={{marginLeft: '10px'}}>{values.sets[0].reps} {' reps @ '} Weight: {values.sets[0].weight}{' lbs'}</li>
                        <li style={{marginLeft: '10px'}}></li>
                        <li style={{marginLeft: '10px'}}>Notes: {values.notes}</li>
                    </div>   
                </div>
            </div>
        )
    }
}

export default Post