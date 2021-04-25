import { combineReducers } from "redux"

import reducers from "./authReducers"
import {firebaseReducer} from "react-redux-firebase"
const rootReducer = combineReducers({
  auth: reducers,
  firebase:firebaseReducer,
})
export default rootReducer
