import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: 'AIzaSyDrDHI5AaS0cCw2BVSXsQktfyHPYk1gcz4',
    authDomain: 'quoteverse-3990a.firebaseapp.com',
    projectId: 'quoteverse-3990a',
    storageBucket: 'quoteverse-3990a.appspot.com',
    messagingSenderId: '171232950013',
    appId: '1:171232950013:web:3ab6db27ebb5fc21b7f094',
    measurementId: 'G-LBPWNGF0J4'
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore();



