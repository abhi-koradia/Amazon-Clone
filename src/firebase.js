// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAFqLRVmEwU_2YVG69KSKs4jc-r7lLtkf4",
    authDomain: "clone-2e75e.firebaseapp.com",
    projectId: "clone-2e75e",
    storageBucket: "clone-2e75e.appspot.com",
    messagingSenderId: "41854290853",
    appId: "1:41854290853:web:2771ba696ad9442874764c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
