// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUlxduPIFcO0QfYgc6z1Ars2lPfDp3vMg",
  authDomain: "myapp-851d1.firebaseapp.com",
  projectId: "myapp-851d1",
  storageBucket: "myapp-851d1.appspot.com",
  messagingSenderId: "678147120702",
  appId: "1:678147120702:web:bf7ff8bd310cc573ca3b6f",
  measurementId: "G-9S9PY5EQ2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()