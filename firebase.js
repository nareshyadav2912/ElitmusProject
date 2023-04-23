type="module"
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbhQ9is2BohbjdUygtYtHMcs7zF8ddC_k",
    authDomain: "elitmus-bf272.firebaseapp.com",
    projectId: "elitmus-bf272",
    storageBucket: "elitmus-bf272.appspot.com",
    messagingSenderId: "669312198430",
    appId: "1:669312198430:web:3141712a5c791280908b0f",
    measurementId: "G-38961SH6W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);