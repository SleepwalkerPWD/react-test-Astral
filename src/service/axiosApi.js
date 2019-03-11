import axios from 'axios';
export default class AxiosApi {
    constructor() {
        this._apiBase = 'https://jsonplaceholder.typicode.com';
    }

    getResource = async (url) => {
            try {
                const { data } = await axios.get(`${this._apiBase}${url}`);
                return data;
            } catch (e) {
                throw new Error(e);
            }
    }

    getPosts = async () => {
       const res = await this.getResource(`/posts`);
       return res.map(this._transformPosts);
    }

    getPost = async (id) => {
        const post = await this.getResource(`/posts/${id}`);
        return this._transformPosts(post);
    }

    getComments = async () => {
        const res = await this.getResource(`/posts/postId/comments`);
        return res.map(this._transformComments);
    }

    getUsers = async () => {
        const res = await this.getResource(`/users`);
        return res.map(this._transformUser);
    }

    ifSet(data) {
        if(data) {
            return data;
        } else {
            return 'no data!';
        }
    }

    _transformPosts = (posts) => {
        return {
            userId: this.ifSet(posts.userId),
            id: this.ifSet(posts.id),
            title: this.ifSet(posts.title),
            body: this.ifSet(posts.body),
        }
    }

    _transformComments = (comments) => {
        return {
            postId:this.ifSet(comments.postId),
            id: this.ifSet(comments.id),
            email: this.ifSet(comments.email),
            name: this.ifSet(comments.name),
            body: this.ifSet(comments.body),
        }
    }

    _transformUser = (user) => {
        return {
            id: this.ifSet(user.id),
            name: this.ifSet(user.name),
            username: this.ifSet(user.username),
            email: this.ifSet(user.email),
            address: {
                street: this.ifSet(user.address.street),
                suite: this.ifSet(user.address.suite),
                city: this.ifSet(user.address.city),
                zipcode: this.ifSet(user.address.zipcode),
                geo: {
                lat: this.ifSet(user.lat),
                lng: this.ifSet(user.lng),
                }
            },
            phone: this.ifSet(user.phone),
            website: this.ifSet(user.website),
            company: {
                name: this.ifSet(user.company.name),
                catchPhrase: this.ifSet(user.company.catchPhrase),
                bs: this.ifSet(user.company.bs),
            }
        }
    }
}

