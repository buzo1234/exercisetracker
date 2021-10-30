// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABerBiTwXyPQqQopjV_vFryr_Tq4Hme9I",
  authDomain: "live-orders-abf8c.firebaseapp.com",
  projectId: "live-orders-abf8c",
  storageBucket: "live-orders-abf8c.appspot.com",
  messagingSenderId: "795781714454",
  appId: "1:795781714454:web:4de26535dae69a58d35b37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };