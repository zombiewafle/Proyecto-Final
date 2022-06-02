import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from 'firebase/storage';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9ShcSmqjYG8HjjMte85gZy2F0IsitCSo",
  authDomain: "proyectofinal-d8b19.firebaseapp.com",
  projectId: "proyectofinal-d8b19",
  storageBucket: "proyectofinal-d8b19.appspot.com",
  messagingSenderId: "884623133671",
  appId: "1:884623133671:web:193e368e3a3d8008a78b42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);