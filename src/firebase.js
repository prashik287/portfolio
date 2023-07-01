// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyNpIuXt3qKd1rkbL_rJOyvmSwEeTrKkY",
  authDomain: "message-2dce7.firebaseapp.com",
  projectId: "message-2dce7",
  storageBucket: "message-2dce7.appspot.com",
  messagingSenderId: "282487172146",
  appId: "1:282487172146:web:9c0ad069c2f476cfb8a02b",
  measurementId: "G-8CVY9Y6MWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);	
export const database = getDatabase(app);