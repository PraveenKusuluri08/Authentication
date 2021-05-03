import TodoReducer from "./projectReducers"

import { combineReducers } from "redux"


const rootReducer = combineReducers({
  todoItems: TodoReducer,
})
export default rootReducer
