import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.172.180:8080',
})

export const addGame = async () => {
  try {
    const response = await api.post(
      '/game',
      {headers: {Authorization: "Basic aGFuczoxMjM0NTY="}}
    )
    return response.data
  } catch(error) {
    console.log(error)
  }
}