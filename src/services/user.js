import request from "./config";

const getAllUsers = async () => {
  try {
    const res = await request.get('/user/all')
    return res
  } catch (error) {
    console.log('erro', error)
  }
}

const createUser = async (userData) => {
  const res = await request.post('/user/create', userData)
  return res
}

const updateDetails = async (userDetailsData) => {
  try {
    const res = await request.put('/user/details', userDetailsData)
    return res
  } catch (error) {
    console.log('erro', error)
    
  }
}

const uploadDocuments = async (documentFiles) => {
  try {
    const res = await request.post('/upload/documents', documentFiles)
    return res
    
  } catch (error) {
    console.log('erro', error)
  }

}

const acceptedUser = async (formData) => {
  const resp = await request.put('/user/accepted', formData )
  
  return resp
}

const getAllApproves = async () => {
  const { data } = await request.get('/user/approval')

  return data
}

export {
  getAllUsers,
  createUser,
  updateDetails,
  uploadDocuments,
  getAllApproves,
  acceptedUser
}