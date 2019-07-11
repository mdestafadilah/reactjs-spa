import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCogW-8Y1RUf-nappM-dnkFE2tTiyaKs7k",
    authDomain: "reactjs-spa-c5ee1.firebaseapp.com",
    databaseURL: "https://reactjs-spa-c5ee1.firebaseio.com",
    projectId: "reactjs-spa-c5ee1",
    storageBucket: "",
    messagingSenderId: "716287574830",
    appId: "1:716287574830:web:f794ca0ecfed4906"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;