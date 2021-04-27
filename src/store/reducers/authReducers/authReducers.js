import ACTIONS from "../../actions/actionTypes"
import initialState from "./initialState"

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_REQUEST:
      console.log("logging request")
      return {
        ...state,
        authError: true,
      }
    case ACTIONS.LOGIN_SUCCESS:
      console.log("login success")
      return {
        ...state,
        autheError: false,
      }
    case ACTIONS.LOGIN_FAILURE:
      console.log("login Failure")
      console.log(action.error)
      return {
        ...state,
        authError: false,
      }

    // signing out
    
    case ACTIONS.LOGOUT_REQUEST:
      console.log("signing out requesting")
      return {
        ...state,
        authError: false,
      }
    case ACTIONS.LOGOUT_SUCCESS:
      console.log("signing out success");
      return {
        ...state,
        authError: false,
      }
    case ACTIONS.LOGOUT_FAILURE:
      console.log("signing out failure")
      return {
        ...state,
        authError: true,
      }
    default:
      return state
  }
}
export default reducers
