// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXMlt6orQam_bTf2UZqu1HTMThHb6Josc",
  authDomain: "budget-buddy-8125a.firebaseapp.com",
  projectId: "budget-buddy-8125a",
  storageBucket: "budget-buddy-8125a.appspot.com",
  messagingSenderId: "723345358394",
  appId: "1:723345358394:web:0b811c440d9fe20ea3bf03",
  measurementId: "G-YB9BHRR85N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);