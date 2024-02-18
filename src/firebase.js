// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdueqEx6fZuTLHlKbkOM8FMZJqyoeU3vE",
  authDomain: "proqruct-e4df0.firebaseapp.com",
  projectId: "proqruct-e4df0",
  storageBucket: "proqruct-e4df0.appspot.com",
  messagingSenderId: "258676180506",
  appId: "1:258676180506:web:79e0536201178dbedcb3a3",
  measurementId: "G-8567SQK3FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);

