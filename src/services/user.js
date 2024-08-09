import request from "./config";

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
  createUser,
  updateDetails,
  uploadDocuments,
  getAllApproves,
  acceptedUser
}