import { LOG_IN, LOG_OUT } from 'actions/types'

const login = user => {
  type: LOG_IN,
  payload: user
}

const logout = () => {
  type: LOG_OUT,
}

export login
export logout