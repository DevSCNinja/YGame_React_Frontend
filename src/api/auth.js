import axios from 'axios'

import { API_URL } from '../constants/'

const authHeader = {
  headers: {
    'Authorization': localStorage.getItem('token')
  }
}

const authApi = {
  login: (email, password) => axios.post(`${API_URL}/auth/login`, {
    email,
    password
  }),
  register: (email, password) => axios.post(`${API_URL}/auth/register`, {
    email,
    password
  }),
  me: () => axios.get(`${API_URL}/auth/me`, authHeader)
}

export default authApi