// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "mern-estate-f636c.firebaseapp.com",
  projectId: "mern-estate-f636c",
  storageBucket: "mern-estate-f636c.appspot.com",
  messagingSenderId: "620548361646",
  appId: "1:620548361646:web:2956442ac0d3dd9b56cc3f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);