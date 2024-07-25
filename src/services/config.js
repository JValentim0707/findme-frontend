import axios from 'axios'

const devURL = 'http://localhost:3030'
// const prodURL = 'https://findme-backend-ten.vercel.app'

axios.defaults.baseURL = devURL

const request = axios

export default request