import axios from 'axios';


const api = axios.create({
    //baseURL: 'https://snofflestein-api.herokuapp.com'
    baseURL: 'http://localhost:1234'
})

const UNAUTHORIZED = 401;

// if unauthorized alert need to login
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            const { status } = error.response;
            if (status === UNAUTHORIZED) {
                console.log(
                    "unauthorized"
                )
            }
            return Promise.reject(error);
        }
    }
);



export const createPost = payload => {
    let accessString = localStorage.getItem('token');
    if (accessString === null) {
        console.log("no token")
    }
    return api.post(`/admin/posts`, payload, {
        headers: { Authorization: accessString }
    })
}



export const getPostCreate = () => {
    let accessString = localStorage.getItem('token');
    if (accessString === null) {
        console.log("no token")
    }
    return api.get(`/admin/posts/create`, {
        headers: { Authorization: accessString }
    })
}



export const commentCreate = (postID, payload) => {
    let accessString = localStorage.getItem('token');
    if (accessString === null) {
        console.log("no token")
    }
    return api.post(`/admin/posts/${postID}`, payload, {
        headers: { Authorization: accessString },
    })
}


// admin api routes

export const signUp = payload => api.post(`/admin/signup`, payload)
export const login = payload => api.post(`/admin/login`, payload)

export const getAllPosts = () => {

    let accessString = localStorage.getItem('token');
    if (accessString === null) {
        console.log("no token")
    }
    return api.get(`/admin/posts`, {
        headers: { Authorization: accessString },
    })
}



export const updatePostByID = (postID, payload) => {
    let accessString = localStorage.getItem('token');
    if (accessString === null) {
        console.log("no token")
    }
    return api.put(`/admin/posts/${postID}`, payload, {
        headers: { Authorization: accessString },
    })
}



export const deletePostByID = postID => {
    let accessString = localStorage.getItem('token');
    if (accessString === null) {
        console.log("no token")
    }
    return api.delete(`/admin/posts/${postID}`, {
        headers: { Authorization: accessString },
    })
}
    

export const deleteCommentByID = (postID, commentID) => {
    let accessString = localStorage.getItem('token');
    if (accessString === null) {
        console.log("no token")
    }
    return api.delete(`/admin/posts/${postID}/${commentID}`, {
        headers: { Authorization: accessString },
    })
}
    
    
export const getPostByID = postID => {
    let accessString = localStorage.getItem('token');
    if (accessString === null) {
        console.log("no token")
    }
    return api.get(`/admin/posts/${postID}`, {
        headers: { Authorization: accessString },
    })
}
    
    

const apis = {
    createPost,
    getAllPosts,
    updatePostByID,
    deletePostByID,
    getPostByID,
    signUp,
    login,
    commentCreate,
    deleteCommentByID,
    getPostCreate
}

export default apis