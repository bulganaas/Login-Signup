// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCJSB8Bkq2BADspl4klBdV8I0bs_PshHNE",
  authDomain: "fir-auth-login-d5954.firebaseapp.com",
  projectId: "fir-auth-login-d5954",
  storageBucket: "fir-auth-login-d5954.appspot.com",
  messagingSenderId: "717767470404",
  appId: "1:717767470404:web:34cb01c20afc8a94c83b11",
  measurementId: "G-3DJ9MQRLNH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};

