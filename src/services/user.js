import request from "./config";

const createUser = async (userData) => {
  const res = await request.post('/user/create', userData)
  return res
}

export {
  createUser
}