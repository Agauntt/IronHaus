import React, { Component } from 'react'

class Post extends Component {


    render() {
    const { values } = this.props;
        return (
            <div style={{borderBottom: 'solid', borderWidth: '1px'}}>
                <div className='row'>
                    <div className='col-3'>
                        <h5 style={{textDecoration: 'underline'}}>{values.owner_name}</h5>
                    </div>
                    <div className='col-9'>                      
                        <li style={{marginLeft: '15px'}}>Sets: {values.sets}</li>
                        <li style={{marginLeft: '15px'}}>Weight: {values.weight}</li>
                        <li style={{marginLeft: '15px'}}>Notes: {values.notes}</li>
                    </div>    
                </div>
            </div>
        )
    }
}

export default Post