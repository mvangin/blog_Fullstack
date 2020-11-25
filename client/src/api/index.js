import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9000'
})

export const createBlog = payload => api.post(`/blogs`, payload)
export const getAllBlogs = () => api.get(`/blogs`)
export const updateBlogByID = (id, payload) => api.put(`/blogs/${id}`, payload)
export const deleteBlogByID = id => api.delete(`/blogs/${id}`)
export const getBlogByID = id => api.get(`/blogs/${id}`)

const apis = {
    createBlog,
    getAllBlogs,
    updateBlogByID,
    deleteBlogByID,
    getBlogByID,
}

export default apis