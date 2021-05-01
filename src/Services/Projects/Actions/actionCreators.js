import ACTIONS from "./actionTypes"

export const projectRequest=()=>{
  return{
    type:ACTIONS.PROJECT_REQUEST
  }
}

export const projectSuccess=()=>{
  return{
    tyoe:ACTIONS.PROJECT_SUCCESS
  }
}

export const projectFailure=()=>{
  return{
    type:ACTIONS.PROJECT_FAILURE
  }
}