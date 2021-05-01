import authReducer from "../../Services/Authentication/reducers"
import todoReducer from "../../Services/Projects/reducers/index"

import {combineReducers} from "redux"
import { firebaseReducer, firestoreReducer } from "react-redux-firebase"


const rootReducer=combineReducers({
  firebase :firebaseReducer,
  firestore :firestoreReducer,
  auth : authReducer,
  todo: todoReducer
})
export default rootReducer   