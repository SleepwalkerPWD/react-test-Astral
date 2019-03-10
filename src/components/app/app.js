import React, { Component } from 'react';
import Home from '../home';
import About from '../about';
import SeparatePost from '../separatePost';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.sass';

export default class App extends Component {

  render() {
    return (
        <Router>
            <div className='app'>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About} />
                  <Route path='/posts/:postid' render={
                        ({match}) =>{
                            console.log(match);
                            const {postid} = match.params;
                            return <SeparatePost id={postid}/>}}
                   />
            </div>
        </Router>
     );
  }
}
