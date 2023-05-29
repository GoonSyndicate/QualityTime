// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDH3J0TSmtSSAui8R-BqP1rnXBNtYD8VMo',
  authDomain: 'qualitytime-f491d.firebaseapp.com',
  projectId: 'qualitytime-f491d',
  storageBucket: 'qualitytime-f491d.appspot.com',
  messagingSenderId: '358960445278',
  appId: '1:358960445278:web:c96c2b2b95b9178eb401cf',
  measurementId: 'G-LG9995WH98',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
