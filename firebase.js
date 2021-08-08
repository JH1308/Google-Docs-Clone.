import firebase from "firebase";
 
const firebaseConfig = {
    apiKey: "AIzaSyDWYhse3nYng2RI4Z6DaP8T3oOniRzmM1s",
    authDomain: "docs-clone-5dfcd.firebaseapp.com",
    projectId: "docs-clone-5dfcd",
    storageBucket: "docs-clone-5dfcd.appspot.com",
    messagingSenderId: "102496625981",
    appId: "1:102496625981:web:a64171edab5772b106d154"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();

export { db };