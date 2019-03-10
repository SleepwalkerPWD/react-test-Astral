import React, { Component } from 'react';
import ViewPost from '../viewPost';
import Sidebar from '../sidebar';

import './separatePost.sass';

export default class SeparatePost extends Component {

    render() {

        return (
            <div className='separatePost'>
            <div className='home__wrapper-sidebar separateSize'>
                <Sidebar />
            </div>
                <ViewPost postId={this.props.id}/>

            </div>
       );
   }
}