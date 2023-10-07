// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH4z5FTCyPuONjOS1jh_VoZm4tJtoMHZ4",
  authDomain: "moneymaster-2f425.firebaseapp.com",
  projectId: "moneymaster-2f425",
  storageBucket: "moneymaster-2f425.appspot.com",
  messagingSenderId: "310412330749",
  appId: "1:310412330749:web:b18e32d321b2fe1251e094",
  measurementId: "G-R28P1BW4RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);