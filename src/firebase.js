// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA614HyDT_Raz4mD-MOT6kpIeaYsZoQF8E",
    authDomain: "chat-c75f5.firebaseapp.com",
    projectId: "chat-c75f5",
    storageBucket: "chat-c75f5.appspot.com",
    messagingSenderId: "157127472260",
    appId: "1:157127472260:web:de410a1aeb701393513ed1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()