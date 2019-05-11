import { LOG_IN, LOG_OUT } from 'actions/types'

export default (state = {}, action) => {
  switch(action.type) {
    case LOG_IN:
      state = {...action.payload, loggedIn: true}
      break
    case LOG_OUT:
      state = {loggedIn: false}
      break
    default:
      break
  }
  return state
}