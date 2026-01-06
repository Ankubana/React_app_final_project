// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3gk9Cyf3oeSlKiwMbzu0lXiOFTOmBERg",
  authDomain: "alphonse-nkubana.firebaseapp.com",
  projectId: "alphonse-nkubana",
  storageBucket: "alphonse-nkubana.firebasestorage.app",
  messagingSenderId: "389783381441",
  appId: "1:389783381441:web:13e8c0bddaaab0532cfb40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();