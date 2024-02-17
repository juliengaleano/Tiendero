// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHy6rAT7LAz8L7HnWzIqk4h0oVkLJDDKg",
  authDomain: "tiendero-cca7a.firebaseapp.com",
  projectId: "tiendero-cca7a",
  storageBucket: "tiendero-cca7a.appspot.com",
  messagingSenderId: "527120679888",
  appId: "1:527120679888:web:739c54f6cf6b1329d42fd5",
  measurementId: "G-BTYFJ80Q15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);