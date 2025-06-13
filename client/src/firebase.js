// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, getFirestore } from "firebase/auth";

const firebaseConfig = {
  // need to fill
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log("Firebase initialized:", app.name);

export { app, auth, db };
