import { login as apiLogin } from 'apis/user'
import { LOG_IN, LOG_OUT } from 'actions/types';

export const login = (user) => async dispatch => {
  const valid = await apiLogin(user.username, user.password)
  if (valid) {
    dispatch ({
      type: LOG_IN,
      payload: user,
    })
    return true
  } else {
    return false
  }
}

export const logout = () => {
  return {
    type: LOG_OUT,
  }
}

export const signup = async user => dispatch => {
  

  dispatch({
    type: LOG_IN,
    payload: user
  })
}