
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCdQV5puRfrtRE9QktUccFbkw5TTZdLn4",
  authDomain: "fslapp-76ac0.firebaseapp.com",
  projectId: "fslapp-76ac0",
  storageBucket: "fslapp-76ac0.appspot.com",
  messagingSenderId: "927077445874",
  appId: "1:927077445874:web:7a04ae5bb5cab31ad3606b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
