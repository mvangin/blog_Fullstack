import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:9000'
})

const UNAUTHORIZED = 401;

api.interceptors.response.use(
    response => response,
    error => {
        const { status } = error.response;
        if (status === UNAUTHORIZED) {
            window.location = "http://localhost:3000/login";
        }
        return Promise.reject(error);
    }
);



export const createPost = payload => api.post(`/posts`, payload);

export const getPostCreate = () => {
    let accessString = localStorage.getItem('token');
    if (accessString === null) {
        console.log("no token")
    }
    return api.get(`/posts/create`, {
        headers: { Authorization: accessString }
    })
}



export const commentCreate = (postID, payload) => {
    let accessString = localStorage.getItem('token');
    if (accessString === null) {
        console.log("no token")
    }
    return api.post(`/posts/${postID}`, payload, {
        headers: { Authorization: accessString },
    })
}



export const signUp = payload => api.post(`/signup`, payload)
export const login = payload => api.post(`/login`, payload)

export const getAllPosts = () => (api.get(`/posts`))

export const updatePostByID = (postID, payload) => api.put(`/posts/${postID}`, payload)
export const deletePostByID = postID => api.delete(`/posts/${postID}`)
export const getPostByID = postID => api.get(`/posts/${postID}`)

const apis = {
    createPost,
    getAllPosts,
    updatePostByID,
    deletePostByID,
    getPostByID,
    signUp,
    login,
    commentCreate,
    getPostCreate
}

export default apis