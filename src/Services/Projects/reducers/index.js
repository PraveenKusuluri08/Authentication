import  todoReducer from "./todoReducer"

import { combineReducers } from 'redux'

const TodoIndexReducer=combineReducers({
  todos:todoReducer
})
export default TodoIndexReducer