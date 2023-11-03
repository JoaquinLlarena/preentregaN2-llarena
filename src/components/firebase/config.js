// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8crQpPts0sbU1D25Aeq8BcW56Sc66yVU",
  authDomain: "tacticalshop-63ca9.firebaseapp.com",
  projectId: "tacticalshop-63ca9",
  storageBucket: "tacticalshop-63ca9.appspot.com",
  messagingSenderId: "1078604448237",
  appId: "1:1078604448237:web:83d5962ac3b23bfb5c67e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)