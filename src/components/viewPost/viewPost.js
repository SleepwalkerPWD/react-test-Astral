import React, { Component } from 'react';
import axiosApi from '../../service/axiosApi';
import spinner from '../../img/spinner/spinner.gif'
import {Link} from 'react-router-dom';

import './viewPost.sass';

export default class ViewPost extends Component {
    
    axiosApi = new axiosApi();

    constructor(props){
        super(props);
        this.state = {
            postUsers: [],
            onePost: [],
            comments: [],
            isLoaded: false,
        }
    }
        
    componentDidMount() {
        
        const {postId} = this.props;

        if(!postId) {
            return;
        }
        
 
        this.axiosApi.getComments()
        .then( (comments) => {
            
            this.setState ({
                comments,
                isLoaded: true,
            })
        })

        this.axiosApi.getPost(postId)
            .then( (onePost) => {

                this.setState ({
                    onePost
                })
            })
            
        this.axiosApi.getUsers()
            .then( (postUsers) => {

                this.setState ({
                    postUsers
                })
            })
    }

    render() {
        
        const { postUsers, onePost, comments, isLoaded } = this.state;

        if(!isLoaded) {
            return  <div className="view-spinner">
                        <img src={spinner} alt='spinner'/>
                    </div>
        }
        
        return (
           <> 
                <div className="view-wrapper">
                    {/* Пост */}
                    <div className="view-onePost" key={onePost.id}>
                            
                        <h1>{onePost.title}</h1>
                        <span>TRAVEL</span>
                        <div></div>
                        <p>{onePost.body}</p>

                    </div>
                    {/* Комментарии */}
                    {comments.map((comment) => (
                        
                        <>
                            <div className="view-comments" key={comment.id}>
                                <div>
                                    <h3>{comment.postId === onePost.userId ? comment.name : null}</h3>
                                    <p>{comment.postId === onePost.userId ? comment.body : null}</p>
                                </div>

                            </div>
                        </>
                        
                    ))}
                    {/* Автор поста */}
                    {postUsers.map((user) => (
                        
                        <>
                            <div className="view-user" key={user.id}>
                                <div>{onePost.userId === user.id ? user.name : null}</div>
                                <div>{onePost.userId === user.id ? user.username : null}</div>
                                <div>{onePost.userId === user.id ? user.phone : null}</div>
                                <div>{onePost.userId === user.id ? user.email : null}</div>
                                <div>{onePost.userId === user.id ? user.website : null}</div>
                            </div>
                        </>
                        
                    ))}
                    <div>
                        <Link className="view-button" to="/">
                            View all posts
                        </Link>
                    </div> 
                </div>

            </>
       );
   }
}