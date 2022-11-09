import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSKkxDuilaSo4EM7z1Ro_sUaeqsP7-oOA",
  authDomain: "chatsection-aae12.firebaseapp.com",
  projectId: "chatsection-aae12",
  storageBucket: "chatsection-aae12.appspot.com",
  messagingSenderId: "713746891331",
  appId: "1:713746891331:web:0cf15945bf674a34730af6",
  measurementId: "G-NE8QS2BZMN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
