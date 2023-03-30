// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

//console.log(5555555, db, app);

export { app, db, storage };

// const firebaseConfig = {
//   apiKey: "AIzaSyCfl3St65vloHWcCPbrMwKIUOXilOKDt7s",
//   authDomain: "insta-my-v2.firebaseapp.com",
//   projectId: "insta-my-v2",
//   storageBucket: "insta-my-v2.appspot.com",
//   messagingSenderId: "374669738010",
//   appId: "1:374669738010:web:1475812815e29ce213d1a3",
// };
