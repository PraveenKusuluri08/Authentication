import ACTIONS from "../actions/actionTypes"

import initialState from "./initialState"

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_REQUEST:
      console.log("logging request");
      return {
        ...state,
        authError: true,
      }
    case ACTIONS.LOGIN_SUCCESS:
      console.log("login success")
      return {
        ...state,
        authError: false,
      }
    case ACTIONS.LOGIN_FAILURE:
      console.log("login failure")
      return {
        ...state,
        authError: false,
      }
    default:
      return state
  }
}
export default authReducers