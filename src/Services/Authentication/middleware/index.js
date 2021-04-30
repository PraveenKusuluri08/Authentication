import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} from "../actions/actionCreators"

export const logIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    dispatch(loginRequest())
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch(loginSuccess())
      })
      .catch((error) => {
        dispatch(loginFailure(),error)
      })
  }
}

//logut middileware

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    dispatch( logoutRequest())
    firebase
      .auth()
      .signOut()
      .then((message) => {
        dispatch(logoutSuccess(),message)
      })
      .catch((error) => {
        dispatch(logoutFailure(),error)
      })
  }
}
