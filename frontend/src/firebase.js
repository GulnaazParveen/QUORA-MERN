// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1HzI1tbDhRjDlcj8fI5q_AKtafCRizcY",
  authDomain: "quore-clone-mern.firebaseapp.com",
  projectId: "quore-clone-mern",
  storageBucket: "quore-clone-mern.appspot.com",
  messagingSenderId: "992475864329",
  appId: "1:992475864329:web:c66bac5506d5b789b087d8",
  measurementId: "G-V3RVWEY6C8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
const provider= new GoogleAuthProvider()
export {auth,provider}