// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbdscnQEPuj1llaEop1AdYFPsAKG3YgG8",
  authDomain: "netflix-c50fc.firebaseapp.com",
  projectId: "netflix-c50fc",
  storageBucket: "netflix-c50fc.appspot.com",
  messagingSenderId: "193897241431",
  appId: "1:193897241431:web:c5f8a597289003ac7efc12",
  measurementId: "G-P7TKTEQ42J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()