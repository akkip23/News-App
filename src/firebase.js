// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApMmPKJUlrYvDKF3vefnh_bopjFpDGgCc",
  authDomain: "news-ringing.firebaseapp.com",
  projectId: "news-ringing",
  storageBucket: "news-ringing.appspot.com",
  messagingSenderId: "1042387061152",
  appId: "1:1042387061152:web:1b9b0b926dc88929267cc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
