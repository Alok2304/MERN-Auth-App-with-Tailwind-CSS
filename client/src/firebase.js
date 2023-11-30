// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-75fdd.firebaseapp.com",
  projectId: "mern-auth-75fdd",
  storageBucket: "mern-auth-75fdd.appspot.com",
  messagingSenderId: "392343747286",
  appId: "1:392343747286:web:0bb535cdbd8f3f88efe777"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);