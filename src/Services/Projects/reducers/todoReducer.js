import ACTIONS from "../actions/actionTypes"

import initialState from "./initialState"

 const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TODO_REQUEST:
      console.log("Todo requesting")
      return state
    case ACTIONS.TODO_SUCCESS:
      console.log("Todo successfully done")
      return state
    case ACTIONS.TODO_FAILURE:
      console.log("Todo failed")
      return state
    default:
     return state
  }
}
export default todoReducer