// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeBGnPhnyZVLNpkxHaW5megtvyTjdhtxE",
  authDomain: "shop-1fe2a.firebaseapp.com",
  projectId: "shop-1fe2a",
  storageBucket: "shop-1fe2a.appspot.com",
  messagingSenderId: "550572756232",
  appId: "1:550572756232:web:8ad29aa781c8403cbd70bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;