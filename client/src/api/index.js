import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9000'
})

export const createPost = payload => api.post(`/posts`, payload)
export const createComment = (postID, payload) => api.post(`/posts/${postID}`, payload)

export const signUp = payload => api.post(`/signup`, payload)
export const login = payload => api.post(`/login`, payload)

export const getAllPosts = () => {
    let accessString = localStorage.getItem('token');
    if (accessString === null) {
        console.log("no token")
    }
    return api.get(`/posts`, {
        headers: { Authorization: accessString }
    })
}

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
    createComment
}

export default apis