import axios from 'axios'

const getCepData = async (cep) => {
  try {
    const { data } = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
    return data
  } catch (error) {
    throw new Error('Error Message:', error)
  }
}

export {
  getCepData
}