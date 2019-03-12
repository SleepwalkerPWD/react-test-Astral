import { combineReducers } from 'redux';
import { isLoaded, posts, comments, onePost, users } from './items';

export default combineReducers({
    isLoaded,
    posts,
    comments,
    onePost,
    users
});