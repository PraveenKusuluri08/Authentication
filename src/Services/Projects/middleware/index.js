import { projectRequest, projectSuccess, projectFailure } from "../Actions/actionCreators"

export const todoData = (project) => {
  return (dispatch, getState, { getFirestore })=>{
    // async calls
    const firestore = getFirestore();
    // const profile =getState().firebase.profile;
    // const authId = getState().firebase.auth.uid
    firestore
      .collection("Todos")
      .add({
        ...project,
        autherFirstName: "Praveen",
        autherLastName: "Kusuluri",
        autherId: 888,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch(projectSuccess())
      })
      .catch((error) => {
        console.log(error)
        dispatch(projectFailure(), error)
      })
  }
}