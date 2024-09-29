// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTlgxqDcEd4UHfksVl0AY8L-kEkAqdhJM",
  authDomain: "blog-application-redux.firebaseapp.com",
  projectId: "blog-application-redux",
  storageBucket: "blog-application-redux.appspot.com",
  messagingSenderId: "1053479602087",
  appId: "1:1053479602087:web:c01d26dfc0454d0a231882"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
  app,
  auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
}