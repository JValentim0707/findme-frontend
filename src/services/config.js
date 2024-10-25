import axios from 'axios'

// const hostURL = 'http://localhost:3030'
const hostURL = 'https://findme-backend-ten.vercel.app'

axios.defaults.baseURL = hostURL

const request = axios

export default request