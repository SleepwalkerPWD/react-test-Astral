import React, { Component } from 'react';
import spinner from '../../img/spinner/spinner.gif'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { itemsAxiosComments, itemsAxiosUsers, itemsAxiosPost } from '../../actions/items';

import './viewPost.sass';

class ViewPost extends Component {

    componentDidMount() {
        
        const {postId} = this.props;

        if(!postId) {
            return;
        }
        
        this.props.itemsAxiosComments();
        this.props.itemsAxiosUsers();
        this.props.itemsAxiosPost(postId);

    }

    render() {
        
        const { onePost, users, comments, isLoaded } = this.props;

        if(isLoaded) {
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
                    {comments.map((comment, item) => (
                        
                        <>
                        
                            <div className="view-comments" key={item}>
                                <div>
                                    <h3>{comment.postId === onePost.userId ? comment.name : null}</h3>
                                    <p>{comment.postId === onePost.userId ? comment.body : null}</p>
                                </div>

                            </div>
                        </>
                        
                    ))}
                    {/* Автор поста */}
                    {users.map((user, item) => (
                        
                        <>
                            <div className="view-user" key={item}>
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

const mapStateToProps = (state) => {

    return {
        comments: state.comments,
        isLoaded: state.isLoaded,
        users: state.users,
        onePost: state.onePost
    };
};

export default connect(mapStateToProps, { itemsAxiosUsers, itemsAxiosComments, itemsAxiosPost } )(ViewPost);