import { createStore, applyMiddleware, compose } from "redux"
import { reduxFirestore, getFirestore } from "redux-firestore"
import { reactReduxFirebase, getFirebase } from "react-redux-firebase"
import rootReducer from "../reducers/authReducers/index"
import fbConfig from "../../config/fbConfig"
import  thunk  from "redux-thunk"

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig,{useFirestoreForProfile:true,userProfile:"users",attachAuthIsReady :true}),
    reduxFirestore(fbConfig)
  )
)
export default store
