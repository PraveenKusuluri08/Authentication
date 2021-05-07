import authReducer from "../../Services/Authentication/reducers"

import {combineReducers} from "redux"
import { firebaseReducer, firestoreReducer } from "react-redux-firebase"
import TodoIndexReducer from "../../Services/Projects/reducers/index"
const rootReducer=combineReducers({
  firebase :firebaseReducer,
  firestore :firestoreReducer,
  auth : authReducer,
 todoItems :TodoIndexReducer,
})
export default rootReducer   