import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

/* import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'; */


const firebaseConfig = {
    apiKey: "AIzaSyAHhU8b4v_hhc-vVmqll4V5LlnWim5swQY",
  authDomain: "bancsolutions-28e0f.firebaseapp.com",
  projectId: "bancsolutions-28e0f",
  storageBucket: "bancsolutions-28e0f.appspot.com",
  messagingSenderId: "16483072955",
  appId: "1:16483072955:web:3ee9d8f4e5a22897ef229e"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
 
  const auth = firebase.auth();

  export default {
      db, firebase, auth
  }
  