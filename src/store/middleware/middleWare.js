import { loginRequest, loginSuccess, loginFailure,logoutRequest,logoutSuccess,logoutFailure } from "../actions/actionCreators"
import ACTIONS from "../actions/actionTypes"
export const logIn = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    //for login we need firebase so we use getFirebase
    dispatch(loginRequest())
    const firebase = getFirebase()
    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      //async action so we use then and catch block
      //dispatch({ type: ACTIONS.LOGIN_REQUEST })
      .then((user) => {
        // dispatch({ type: ACTIONS.LOGIN_SUCCESS })
        dispatch(loginSuccess())
        console.log("Login success")
      })
      .catch((error) => {
        // dispatch({ type: ACTIONS.LOGIN_FAILURE, error })
        dispatch(loginFailure())

        console.log("Login failure")
      })
  }
}

// signout

export const signOut=()=>{
  return(dispatch, getState,{getFirebase})=>{
    const firebase =getFirebase();
    dispatch(logoutRequest());
    firebase.auth().signOut()
    .then(()=>{
      dispatch(logoutSuccess())
      console.log("Logout success")
    }).catch(()=>{
      dispatch(logoutFailure());
      console.log("Logout Failure");
    })
  }
}