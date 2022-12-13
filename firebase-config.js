// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // 코드 추가
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm0Qd8Bg1EbqOvfkyD7sh3SHvi_Nlg6d8",
  authDomain: "loginsite-24e82.firebaseapp.com",
  projectId: "loginsite-24e82",
  storageBucket: "loginsite-24e82.appspot.com",
  messagingSenderId: "210848129678",
  appId: "1:210848129678:web:6e3da1694e4f53bcf69fdf",
  measurementId: "G-1YQZ691W12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app); // 코드 추가
