import ACTIONS from "./actionTypes"

export const todoRequest=()=>{
  return{
    type:ACTIONS.TODO_REQUEST
  }
}
export const todoSuccction=(payload)=>{
  return{
    type:ACTIONS.TODO_SUCCESS,
    payload
  }
}
export const todoFailure=()=>{
  return{
    type:ACTIONS.TODO_FAILURE,
    payload
  }
}