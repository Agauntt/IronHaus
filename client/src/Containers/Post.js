import React, { Component } from 'react';
import PostItem from './PostItem';

class Post extends Component {

    test = () => {
        const { values } = this.props;
        console.log("poke " + values.name);
        console.log(values);
    }

    render() {
    const { values } = this.props;
        return (
            <div onClick={this.test} className="post">
                <div className='row'>
                    <div className='col-md-3 col-sm-4'>
                        <h5 style={{marginLeft: '5px', textDecoration: 'underline'}}>{values.name}</h5>
                    </div>
                    <div className='col-9'>
                        <strong style={{marginLeft: '10px'}}> { values.lifts } </strong>                      
                        {/* <li style={{marginLeft: '10px'}}>{values.sets[0].reps} {' reps @ '} Weight: {values.sets[0].weight}{' lbs'}</li> */}
                        {
                            values.sets.map(element => {
                                console.log("lift: " + values.lifts + " reps: " + element.reps + " @ " + element.weight);
                                return (
                                    <PostItem 
                                    reps={element.reps}
                                    weight={element.weight}
                                    />
                                )
                            })
                        }
                    </div>   
                </div>
            </div>
        )
    }
}

export default Post