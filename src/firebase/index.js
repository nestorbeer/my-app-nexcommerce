import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpMZSZ15Tmct1LQcCXjjDExRrEsLk6WI4",
    authDomain: "nex-commerce.firebaseapp.com",
    projectId: "nex-commerce",
    storageBucket: "nex-commerce.appspot.com",
    messagingSenderId: "112755155403",
    appId: "1:112755155403:web:208b133eda0fd6fbdf564e"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
