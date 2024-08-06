import request from "./config"

const login = async (loginData) => {
  const res = await request.post('/auth/login', loginData)
  return res.data
}

const validateEmail = async (userData) => {
  const res = await request.post('/auth/email/validation', userData)
  return res.data

}

export { 
  login,
  validateEmail
}