import { createStore, applyMiddleware,compose } from "redux"
import fbConfig from "../config/fbConfig"
import rootReducer from "./reducer/rootReducer"
import thunk from "redux-thunk"
import { getFirebase, reactReduxFirebase } from "react-redux-firebase"
import { reduxFirestore } from "redux-firestore"
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    reactReduxFirebase(fbConfig,{useFirestoreForProfile:true,userProfile:"users",attachAuthIsReady :true}),
    reduxFirestore(fbConfig)
  )
)