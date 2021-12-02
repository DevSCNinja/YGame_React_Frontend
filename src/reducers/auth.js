import {
  AUTH_LOGIN,
  AUTH_LOGOUT
} from '../constants/actionTypes/auth'

const INITIAL_STATE = {
  currentUser: {
    email: '',
    token: ''
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        currentUser: action.user
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        currentUser: {
          email: '',
          token: ''
        }
      }
    default:
      return state
  }
}

export default reducer