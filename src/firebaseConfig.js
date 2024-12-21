// filepath: /c:/Users/HP/Desktop/Projects/sidecwebapp/src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDqyUcfTz-MqujW6-P8auTKk2DeHwOdzVo",
    authDomain: "sidec-8de34.firebaseapp.com",
    projectId: "sidec-8de34",
    storageBucket: "sidec-8de34.firebasestorage.app",
    messagingSenderId: "962136101295",
    appId: "1:962136101295:web:c6355c0555137eb2e39f5a",
    measurementId: "G-8C1DD2F04J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };