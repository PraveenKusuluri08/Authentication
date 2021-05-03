import ACTIONS from "../Actions/actionTypes"

import initialState from "./initialState"

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.PROJECT_REQUEST:
      console.log("Todo Requesting")
      return {
        ...state,
      }
    case ACTIONS.PROJECT_SUCCESS:
      console.log("Todo Success")
      return {
        ...state,
      }
    case ACTIONS.PROJECT_FAILURE:
      console.log("Todo Failure")
      return {
        ...state,
      }
    default:
      return state
  }
}
export default TodoReducer
