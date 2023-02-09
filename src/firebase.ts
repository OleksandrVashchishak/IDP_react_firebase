import { getStorage, ref } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXebKBaMlj3YniQL1TM1lJWdwTHxkPG48",
  authDomain: "react-75128.firebaseapp.com",
  projectId: "react-75128",
  storageBucket: "react-75128.appspot.com",
  messagingSenderId: "444079568319",
  appId: "1:444079568319:web:36fb744097bc87149f5d0a",
  measurementId: "G-GYY2XJ687Y"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);