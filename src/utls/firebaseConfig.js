// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: env.process.FIREBASE_API_KEY,
    authDomain: env.process.FIREBASE_AUTH_DOMAIN,
    projectId: env.process.FIREBASE_PROJECT_ID,
    storageBucket: env.process.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.process.FIREBASE_MESSAGING_SENDER_ID,
    appId: env.process.FIREBASE_APP_ID,
    measurementId: env.process.FIREBASE_MEASURE_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);