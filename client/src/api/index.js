import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'})

export const login = (loginData) => API.post('user/login', loginData) 
export const signup = (signupData) => API.post('user/signup', signupData) 

export const message  = (Id, message, userName) => API.patch(`user/message/${Id}`,{ message, userName}) 

export const fetchUsers = () => API.get('/user/getAllUsers');
export const fetchAllMessages = () => API.get('/user/fetchAllMessages');