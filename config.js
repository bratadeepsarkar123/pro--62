 import firebase from "firebase";
 
const firebaseConfig = {
  apiKey: "AIzaSyC4iQz75D0MGFldivgorbXDvUKnUAPzXsY",
  authDomain: "pro-60-a7164.firebaseapp.com",
  projectId: "pro-60-a7164",
  storageBucket: "pro-60-a7164.appspot.com",
  messagingSenderId: "348405076864",
  appId: "1:348405076864:web:0c023a49505565d0806765"
};

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//initialize your database

  export default firebase.database()
 

  