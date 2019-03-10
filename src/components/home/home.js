import React, { Component } from 'react';
import './home.sass';
import AllPosts from '../allPosts';
import Sidebar from '../sidebar';

export default class Home extends Component {
    
    render() {

        return (
            <div className="home">

                <div className="home__wrapper">
                    <div className="home__wrapper-sidebar homeSize">
                        <Sidebar />
                    </div>
                        <AllPosts />
                </div> 
            </div>
        );
    }
}
