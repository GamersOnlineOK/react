import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const app = firebase.initializeApp({
    apiKey: "AIzaSyANlKfiOLLhZ9cdwE7TT3dTFES6Uf3m5Qg",
    authDomain: "ecommerce-leonardo.firebaseapp.com",
    projectId: "ecommerce-leonardo",
    storageBucket: "ecommerce-leonardo.appspot.com",
    messagingSenderId: "971808783287",
    appId: "1:971808783287:web:6454705d4ae95124ed0632"
});

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};