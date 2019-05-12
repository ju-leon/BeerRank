import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.173.87:8080/',
})

export const getUser = async (username) => {
  try {
    const response = await api.get(
      '/user',
      { body: {username} }
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const addUser = async (user) => {
  try {
    const response = await api.post(
      '/user/add',
      { body: user }
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const login = async (username, password) => {
  try {
    const hash = new Buffer(username + ':' + password).toString('base64')
    console.log(hash)
    const response = await api.get(
      '/user/login',
      { header: {Authorization: `Basic ${hash}`} }
    )
    return response.status === 200
  } catch (error) {
    console.log(error)
  }
}

export const history = async username => {
  try {
    const response = await api.get(
      '/user/history',
      {
        body: {username}
      })
    return response.data
  } catch (error) {
    console.log(error)
  }
}