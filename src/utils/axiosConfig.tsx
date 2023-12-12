import axios from "axios"
import { store } from "../app/store"
import { useSelector } from "react-redux"

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

export default axiosConfig