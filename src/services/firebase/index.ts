// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../../config/firebase.prod.json";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
