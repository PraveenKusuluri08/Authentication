import authReducer from "../../Services/Authentication/reducers"


import {combineReducers} from "redux"
import { firebaseReducer, firestoreReducer } from "react-redux-firebase"


const rootReducer=combineReducers({
  firebase :firebaseReducer,
  firestore :firestoreReducer,
  auth : authReducer
})
export default rootReducer