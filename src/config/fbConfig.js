import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
const config = {
  apiKey: "AIzaSyAt4rkD_EJxkUDeSSXPufDX2FlRR5xJzIo",
  authDomain: "weather-app-1b938.firebaseapp.com",
  projectId: "weather-app-1b938",
  storageBucket: "weather-app-1b938.appspot.com",
  messagingSenderId: "674585216043",
  appId: "1:674585216043:web:b2ef3b5eafe47ab170566e"
};
firebase.initializeApp(config)

firebase.firestore().settings({timestampsInSnapshots: true})

export const auth =firebase.auth();

export default firebase