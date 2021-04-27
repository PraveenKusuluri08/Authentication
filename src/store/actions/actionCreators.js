import ACTIONS from "./actionTypes"

export const loginRequest = () => {
  return {
    type: ACTIONS.LOGIN_REQUEST,
  }
}
export const loginSuccess=()=>{
  return{
    type:ACTIONS.LOGIN_SUCCESS
  }
}
export const loginFailure=()=>{
  return{
    type:ACTIONS.LOGIN_FAILURE
  }
}

// logging out Action creators
export const logoutRequest=()=>{
  return{
    type:ACTIONS.LOGOUT_REQUEST
  }
}
export const logoutSuccess=()=>{
  return{
    type:ACTIONS.LOGOUT_SUCCESS
  }
}
export const logoutFailure=()=>{
  return{
    type:ACTIONS.LOGOUT_FAILURE
  }
}