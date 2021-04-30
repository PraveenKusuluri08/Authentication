import {loginRequest,loginSuccess,loginFailure} from "../actions/actionCreators"

export const logIn=(credentials)=>{
  return(dispatch,getState,{getFirebase})=>{
    const firebase =getFirebase()
    dispatch(loginRequest())
    firebase.auth().signInWithEmailAndPassword(credentials.email,credentials.password).
    then(()=>{
      dispatch(loginSuccess());
    }).catch((error)=>{
      dispatch(loginFailure());
    })
  }
}