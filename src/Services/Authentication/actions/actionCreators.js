import ACTIONS from "./actionTypes"

export const loginRequest=()=>{
  return{
    type:ACTIONS.LOGIN_REQUEST
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