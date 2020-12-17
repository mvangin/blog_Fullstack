import axios from 'axios';


const api = axios.create({
    //baseURL: 'https://snofflestein-api.herokuapp.com'
    baseURL: 'http://localhost:9000'
})

const UNAUTHORIZED = 401;

// if unauthorized redirect to login page
api.interceptors.response.use(
    response => response,
    error => {
        console.log(error)
        if (error.response) {
            const { status } = error.response;
            if (status === UNAUTHORIZED) {
                alert("please login first");
            }
            return Promise.reject(error);
        }
    }
);



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

export const getPostByID = postID => api.get(`/posts/${postID}`)

const apis = {
    getAllPosts,
    getPostByID,
    signUp,
    login,
    commentCreate,
}

export default apis