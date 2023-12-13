import axios from "axios"
import { store } from "../app/store"
import { setLoginPrompt } from "../features/triggers/triggerSlice"

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

axiosConfig.interceptors.response.use(function (response) {
  return response;
}, async function (error) {
  if (error.response.status === 400) {
    store.dispatch(setLoginPrompt(true))
  }
  return Promise.reject(error);
});

export default axiosConfig