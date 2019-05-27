import React, { Component } from 'react';
import '../Style.css';
import Post from './Post';
import Axios from 'axios';

class Feed extends Component {
    state = {
        Posts: []
    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        Axios.get('/workouts')
             .then(res => 
                this.setState({Posts: res.data}))
    }

    render() {
        return (
            <div className='feed container'>
                {this.state.Posts.map(workout => {
                    return (
                        <Post key={workout._id}
                        values={workout}
                        />
                        // <div>
                        // <strong>
                           
                        // </strong>
                        // </div>
                    )
                })

                }
            </div>
        )
    }
}

export default Feed