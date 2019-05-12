import { LOG_IN, LOG_OUT } from 'actions/types';

export const login = user => {
  const encodedUser = new Buffer(user.username + ':' + user.password).toString('base64')
  console.log(encodedUser)
  
  return {
    type: LOG_IN,
    payload: user,
  }
}

export const logout = () => {
  return {
    type: LOG_OUT,
  }
}