// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnT0U9w8j3m7tUqk3_nHNGApa2rGdvu0Q",
    authDomain: "tinkoff-99047.firebaseapp.com",
    projectId: "tinkoff-99047",
    storageBucket: "tinkoff-99047.appspot.com",
    messagingSenderId: "372207199294",
    appId: "1:372207199294:web:b87ab6df4812d6fa109d6f",
    measurementId: "G-M1TRV95D4V"
};

// Initialize Firebase
initializeApp(firebaseConfig)

export const auth = getAuth()

export const register = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password)

export const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore()