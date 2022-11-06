// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp-HmnVczdz4BqeYCJ1Y_NLG0-3mLipN8",
  authDomain: "hackcamp-2022.firebaseapp.com",
  projectId: "hackcamp-2022",
  storageBucket: "hackcamp-2022.appspot.com",
  messagingSenderId: "251780410140",
  appId: "1:251780410140:web:2e87b96ab35789e66f28d9",
  measurementId: "G-GF7JLKCR9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);