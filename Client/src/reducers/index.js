import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import userReducer from 'reducers/user'

const reducers = combineReducers({
  user: userReducer,
  form: formReducer,
})

export default reducers