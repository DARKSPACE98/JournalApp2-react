// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUpUwqYA-NEfsMtDQZqLlH3azyoXHTJoc",
  authDomain: "react-cursos-c5900.firebaseapp.com",
  projectId: "react-cursos-c5900",
  storageBucket: "react-cursos-c5900.appspot.com",
  messagingSenderId: "139299576097",
  appId: "1:139299576097:web:ceadc6d33d2f99a0fcc660"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp)

export const FirebaseDB = getFirestore ( FirebaseApp );

