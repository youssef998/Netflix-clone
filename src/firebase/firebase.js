import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBdP9CNkeJcasDCqHSXSz9YnGhQ22cqtvo",
  authDomain: "netflix-clone-e03a0.firebaseapp.com",
  databaseURL: "https://netflix-clone-e03a0-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-e03a0",
  storageBucket: "netflix-clone-e03a0.appspot.com",
  messagingSenderId: "721041014793",
  appId: "1:721041014793:web:ecee8d051db9e1e6c578d8",
  measurementId: "G-JVJMDVW4P8",
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(fire);
export const authentication = getAuth(fire);
export const db = getFirestore(fire);
export default fire;
