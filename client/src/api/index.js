import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9000'
})

export const createBlog = payload => api.post(`/blogs`, payload)
export const signUp = payload => api.post(`/signup`, payload)
export const login = payload => api.post(`/login`, payload)

export const getAllBlogs = () => {
    let accessString = localStorage.getItem('token');
    if (accessString === null) {
        console.log("no token")
    }
    return api.get(`/blogs`, {
        headers: { Authorization: accessString }
    })
}

export const updateBlogByID = (id, payload) => api.put(`/blogs/${id}`, payload)
export const deleteBlogByID = id => api.delete(`/blogs/${id}`)
export const getBlogByID = id => api.get(`/blogs/${id}`)

const apis = {
    createBlog,
    getAllBlogs,
    updateBlogByID,
    deleteBlogByID,
    getBlogByID,
    signUp,
    login
}

export default apis