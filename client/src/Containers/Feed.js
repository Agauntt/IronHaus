import React, { Component } from 'react';
import '../Style.css';
import Post from './Post';
import Axios from 'axios';

class Feed extends Component {
    state = {
        Posts: [],
        Loading: true
    }

    componentDidMount() {
        this.loadPosts();
    }



    loadPosts = () => {
        Axios.get('/workouts')
             .then(res => 
                this.setState({Posts: res.data, Loading: false}))
    }

    render() {
        if (this.state.Loading === false) {
        return (
            <div className='feed container'> 
                {
                    this.state.Posts.map(workout => {
                    return (
                        <Post key={workout._id}
                        values={workout}
                        />
                    )
                })
                }
            </div>
        )
    } else {
        return (
            <div className='feed container'>
                <h2>LOADING...</h2>
            </div>
            )
    }
}
}

export default Feed