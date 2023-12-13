import axios from "axios"
import { store } from "../app/store"

const axiosConfig = axios.create({
  baseURL: process.env.BASE_URL
})

axiosConfig.interceptors.request.use(function (config) {
  const { config: { authentication: { accessToken } } } = store.getState()
  config.headers['Authorization'] = accessToken ? `Bearer ${accessToken}` : ''
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  return response;
}, async function (error) {
  if (error.response.status === 401) console.log('sdfsd')
  return Promise.reject(error);
});

export default axiosConfig