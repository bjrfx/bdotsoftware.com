// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoyGezTylT2vvvpcKzHDKRD89jX3WWC2o",
  authDomain: "career-form-a4640.firebaseapp.com",
  projectId: "career-form-a4640",
  storageBucket: "career-form-a4640.appspot.com",
  messagingSenderId: "179619673126",
  appId: "1:179619673126:web:32b1e0d1d450ee7d5122e7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db,doc, setDoc, collection, addDoc, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
