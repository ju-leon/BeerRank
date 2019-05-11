export default (state = {}, action) => {
  switch(action.type) {
    case "login":
      state = {...action.payload, loggedIn: true}
    case "logout":
      state = {loggedIn: false}
  }
  return state
}