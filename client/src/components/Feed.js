import React, { Component } from 'react';
import '../Style.css';
import Post from './Post';

class Feed extends Component {
    state = {
        Posts: "",
        Workouts: []
    }



    render() {
        return (
            <div className='feed container'>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        )
    }
}

export default Feed