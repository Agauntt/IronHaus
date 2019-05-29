import React, { Component } from 'react'

 class PostItem extends Component {
    render() {
    const { reps, weight } = this.props;
    return (
        <div>
            <li style={{marginLeft: '10px'}}>{reps} {' reps @ '} {weight} {'lbs'}</li>
        </div>
    )
}
}

export default PostItem