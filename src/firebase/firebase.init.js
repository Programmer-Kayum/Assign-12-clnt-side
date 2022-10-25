// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqO35q-gUV8rfUnIv7Z7WL2jyPmC8ztG0",
  authDomain: "edx-programming-platform.firebaseapp.com",
  projectId: "edx-programming-platform",
  storageBucket: "edx-programming-platform.appspot.com",
  messagingSenderId: "568656322631",
  appId: "1:568656322631:web:9b09bfe54af915bd075162",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
