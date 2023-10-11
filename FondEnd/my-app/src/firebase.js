import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

export const firebaseConfig = {
 
  apiKey: "AIzaSyA1tzeLjtIQ7BTnHBVUJEjLcKOSfilyg9s",
  authDomain: "projectfe-e7e4e.firebaseapp.com",
  projectId: "projectfe-e7e4e",
  storageBucket: "projectfe-e7e4e.appspot.com",
  messagingSenderId: "719106817733",
  appId: "1:719106817733:web:b7b45ac857114dec417aac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

export {app, auth, db} 