import { loginRequest, loginSuccess, loginFailure } from "../actions/actionCreators"
import ACTIONS from "../actions/actionTypes"
export const logIn = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
        //for login we need firebase so we use getFirebase
    
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
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
