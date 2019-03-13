import axios from 'axios';

// URL
const apiBase = 'https://jsonplaceholder.typicode.com/posts/';
const apiComments = 'https://jsonplaceholder.typicode.com/posts/postId/comments';
const apiUsers = 'https://jsonplaceholder.typicode.com/posts/postId/users'


export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoaded: bool
    };
}

export function itemsAxiosPostsSuccess(posts) {
    return {
        type: 'ITEMS_AXIOS_POSTS_SUCCESS',
        posts
    };
}

export function itemsAxiosCommentsSuccess(comments) {
    return {
        type: 'ITEMS_AXIOS_COMMENTS_SUCCESS',
        comments
    };
}


export function itemsAxiosOnepostSuccess(onePost) {
    return {
        type: 'ITEMS_AXIOS_ONEPOST_SUCCESS',
        onePost
    };
}


export function itemsAxiosUsersSuccess(users) {
    return {
        type: 'ITEMS_AXIOS_USERS_SUCCESS',
        users
    };
}

// Все посты
export function itemsAxiosData() {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        
        axios.get(`${apiBase}`)
            .then((response) => {
          
                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((items) => dispatch(itemsAxiosPostsSuccess(items.data)))
            .catch(() => console.log('error!'));
    };
}

// Комментарии
export function itemsAxiosComments() {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        
        axios.get(`${apiComments}`)
            .then((response) => {

                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((items) => dispatch(itemsAxiosCommentsSuccess(items.data)))
            .catch(() => console.log('error!'));
    };
}

// Юзеры
export function itemsAxiosUsers() {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        axios.get(`${apiUsers}`)
            .then((response) => {
                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((items) => dispatch(itemsAxiosUsersSuccess(items.data)))
            .catch(() => console.log('error!'));
    };
}

// id Поста
export function itemsAxiosPost(id) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        axios.get(`${apiBase}${id}`)
            .then((response) => {
                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((items) => dispatch(itemsAxiosOnepostSuccess(items.data)))
            .catch(() => console.log('error!'));
    };
}
