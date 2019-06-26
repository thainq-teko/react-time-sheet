import axios from 'axios'
const URL = process.env.REACT_APP_API_URL;

const register = params => {
  return axios.post(`${URL}/register`, params);
}

const login = params => {
  return axios.post(`${URL}/login`, params);
}

const changePassword = params => {
  return axios.post(`${URL}/changePass`, params);
}

const forgotPassword = params => {
  return axios.post(`${URL}/forgotPass`, params);
}

export default {
  login, changePassword, forgotPassword, register
}