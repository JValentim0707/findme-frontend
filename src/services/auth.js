import request from "./config"

const login = async (loginData) => {
  const res = await request.post('/auth/login', loginData)
  return res.data
}

export { 
  login
}