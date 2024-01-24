import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIts1QWIMg4PkrqKgc_fkkQdDYeZivBhg",
  authDomain: "wkcz-crud-react.firebaseapp.com",
  projectId: "wkcz-crud-react",
  storageBucket: "wkcz-crud-react.appspot.com",
  messagingSenderId: "138545852229",
  appId: "1:138545852229:web:e3a899625cdac65461982c",
  measurementId: "G-KVSXHWDKSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };