// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk6j-8toorqw-kCEy2iGbDxHRGyrNLbVs",
  authDomain: "budget-app-3a5d0.firebaseapp.com",
  projectId: "budget-app-3a5d0",
  storageBucket: "budget-app-3a5d0.appspot.com",
  messagingSenderId: "817454633935",
  appId: "1:817454633935:web:9266c23b74db74a3b6b8ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
