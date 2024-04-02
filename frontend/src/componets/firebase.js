// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwpYT1AIbvOcXJmcwpOIfBvDG2dDjykWY",
  authDomain: "gapshap-50292.firebaseapp.com",
  projectId: "gapshap-50292",
  storageBucket: "gapshap-50292.appspot.com",
  messagingSenderId: "316277751776",
  appId: "1:316277751776:web:c11a4464d2346c5be0f585",
  measurementId: "G-VDECY91N9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);