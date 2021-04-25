import ACTIONS from "../../actions/actionTypes"
import initialState from "./initialState"

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_REQUEST:
      console.log("logging request")
      return {
        ...state,
        authError: "requesting",
      }
    case ACTIONS.LOGIN_SUCCESS:
      console.log("login success")
      return {
        ...state,
        autheError: null,
      }
    case ACTIONS.LOGIN_FAILURE:
      console.log("login Failure")
      return {
        ...state,
        autheError: "Failure",
      }
    default:
      return state
  }
}
export default reducers
