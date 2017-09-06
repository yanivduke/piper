import axios from 'axios'

export default ({ req, isServer, redirect }) => {
  axios.defaults.baseURL = '/api'
  axios.defaults.timeout = 5000
  if (!isServer) {
    axios.interceptors.response.use(
      response => response,
      error => {
        if (
          error.response.status === 401 &&
          location.pathname !== '/login'
        ) {
          redirect('/login', { page: location.pathname + location.search })
        }
        return Promise.reject(error)
      }
    )
  }
}
