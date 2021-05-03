import { createStore, applyMiddleware,compose } from "redux"
import fbConfig from "../config/fbConfig"
import rootReducer from "./reducer/rootReducer"
import thunk from "redux-thunk"
import { getFirebase, reactReduxFirebase } from "react-redux-firebase"
import { reduxFirestore,getFirestore } from "redux-firestore"
 const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase,getFirestore })),
    reactReduxFirebase(fbConfig,{useFirestoreForProfile:true,userProfile:"users",attachAuthIsReady :true}),
    reduxFirestore(fbConfig)
  )
)      
export default store