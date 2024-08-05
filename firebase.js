// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOJ5PFZhFsIEmi3MJe5YHtaMQ3k37VYaQ",
  authDomain: "inventory-management-9bdf2.firebaseapp.com",
  projectId: "inventory-management-9bdf2",
  storageBucket: "inventory-management-9bdf2.appspot.com",
  messagingSenderId: "904136156884",
  appId: "1:904136156884:web:63ffcbbf199700ac31fd41",
  measurementId: "G-L23HE5L18N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore};