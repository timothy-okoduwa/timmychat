import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFlVXM8F-qX8ZoI2OYoJ_86qyIR-TnFEw",
  authDomain: "ufeedback-a4f7f.firebaseapp.com",
  projectId: "ufeedback-a4f7f",
  storageBucket: "ufeedback-a4f7f.appspot.com",
  messagingSenderId: "750221621834",
  appId: "1:750221621834:web:14c25060fdb8dacb3984b3",
  measurementId: "G-PZ4STL11TT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
