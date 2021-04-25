import ACTIONS from "./actionTypes"

export const loginRequest = () => {
  return {
    type: ACTIONS.LOGIN_REQUEST,
  }
}
export const loginSuccess = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    //for login we need firebase so we use getFirebase

    const firebase = getFirebase()
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
    //async action so we use then and catch block
    //dispatch({ type: ACTIONS.LOGIN_REQUEST })
      .then(() => {
        dispatch({ type: ACTIONS.LOGIN_SUCCESS })
        console.log("Login success")
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.LOGIN_FAILURE, error })
        console.log(error)
      })
  }
}
