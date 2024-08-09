import request from "./config"

const loginOnSystem = async (loginData) => {
  try {
    const res = await request.post('/auth/login', loginData)
    return res.data
  } catch (error) {
    throw new Error('Error: ', error)
  }
}

const validateEmail = async (userData) => {
  const res = await request.post('/auth/email/validation', userData)
  return res.data

}

export { 
  loginOnSystem,
  validateEmail
}