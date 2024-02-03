// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyCZ_ZfEt9-DG4lDP4Sx-LkP40BZsyc_KqA",
    authDomain: "my-portfolio-f1566.firebaseapp.com",
    databaseURL:
      "https://my-portfolio-f1566-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-portfolio-f1566",
    storageBucket: "my-portfolio-f1566.appspot.com",
    messagingSenderId: "392780743443",
    appId: "1:392780743443:web:f98e95020b9d57748090e6",
    measurementId: "G-MZP7X3B6HQ",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
});
