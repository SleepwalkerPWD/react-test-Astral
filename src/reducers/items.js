export function isLoaded(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoaded;

        default:
            return state;
    }
}

export function posts(state = [], action) {
    switch (action.type) {
        case 'ITEMS_AXIOS_POSTS_SUCCESS':
            return action.posts;

        default:
            return state;
    }
}

export function comments(state = [], action) {
    switch (action.type) {
        case 'ITEMS_AXIOS_COMMENTS_SUCCESS':
            return action.comments;

        default:
            return state;
    }
}

export function onePost(state = [], action) {
    switch (action.type) {
        case 'ITEMS_AXIOS_ONEPOST_SUCCESS':
            return action.onePost;

        default:
            return state;
    }
}

export function users(state = [], action) {
    switch (action.type) {
        case 'ITEMS_AXIOS_USERS_SUCCESS':
            return action.users;

        default:
            return state;
    }
}