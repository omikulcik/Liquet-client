import firebase from "firebase/app";
import "firebase/database";

  const config = {
    apiKey: "AIzaSyDi_Xi47Te7BOoaIymQ_6YGSoMVHc2ozdM",
    authDomain: "liquet-b9638.firebaseapp.com",
    databaseURL: "https://liquet-b9638.firebaseio.com",
    projectId: "liquet-b9638",
    storageBucket: "liquet-b9638.appspot.com",
    messagingSenderId: "681762104343"
  };


export default firebase.initializeApp(config);
