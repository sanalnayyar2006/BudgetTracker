// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // <-- Add this import

const firebaseConfig = {
  apiKey: "AIzaSyAA06NwjfQpemO07U4tslFCxnlRX47tm68",
  authDomain: "smartbudget-1585a.firebaseapp.com",
  projectId: "smartbudget-1585a",
  storageBucket: "smartbudget-1585a.firebasestorage.app",
  messagingSenderId: "536478121480",
  appId: "1:536478121480:web:94c148ef34bdcda919dbbd",
  measurementId: "G-CVT3D8GCR5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);