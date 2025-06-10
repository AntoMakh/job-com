// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4ElucL_-S2GOt705xj6aiuZAGuC92FTw",
  authDomain: "job-com-6d8ca.firebaseapp.com",
  projectId: "job-com-6d8ca",
  storageBucket: "job-com-6d8ca.firebasestorage.app",
  messagingSenderId: "887421607109",
  appId: "1:887421607109:web:c22c4985db624fef57e4ac"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("Firebase initialized:", app.name);

export { app, auth };