import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDMmU1gqC_7NOo0Ast-FplkLgsc7p7xJiw",
    authDomain: "portfoliocontactform-23de1.firebaseapp.com",
    projectId: "portfoliocontactform-23de1",
    storageBucket: "portfoliocontactform-23de1.appspot.com",
    messagingSenderId: "880227840830",
    appId: "1:880227840830:web:dd3b33ab1fe0e84420726f",
    measurementId: "G-L10BXGNVZ2"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db };


