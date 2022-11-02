// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9Y7hWuQJEo5bXYgWoToI15AFFfAQQ63k",
    authDomain: "chat-ce7e7.firebaseapp.com",
    projectId: "chat-ce7e7",
    storageBucket: "chat-ce7e7.appspot.com",
    messagingSenderId: "697507311792",
    appId: "1:697507311792:web:565e95d151d52514a38b75"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()