﻿import {
    useEffect,
    useState
} from 'react';
import firebase, {
    initializeApp
} from 'firebase/app';
import {
    Firestore,
    getFirestore
} from 'firebase/firestore';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
    signInWithPopup,
    updatePassword,
    reauthenticateWithCredential
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// const {
//     REACT_APP_API_KEY,
//     REACT_APP_AUTH_DOMAIN,
//     REACT_APP_PROJECT_ID,
//     REACT_APP_STORAGE_BUCKET,
//     REACT_APP_MESSAGING_SENDER_ID,
//     REACT_APP_APP_ID,
//     REACT_APP_MEASUREMENT_ID,
// } = process.env;

const firebaseConfig = {
    apiKey: "AIzaSyAjGcJ5eNi6xQTh5fmzo4MUzGZGeu0ehUw",
    authDomain: "shopping-website-78059.firebaseapp.com",
    projectId: "shopping-website-78059",
    storageBucket: "shopping-website-78059.appspot.com",
    messagingSenderId: "44359150104",
    appId: "1:44359150104:web:4ed169aa0ba9735c47b16d",
    measurementId: "G-WYVSJ3RY29",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);


// REGISTER
export function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

// LOGIN
export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

// LOGIN GOOGLE
export function loginGoogle(provider) {
    return signInWithPopup(auth, provider);
}

// LOG OUT
export function logout() {
    return signOut(auth);
}

// RESET PASSWORD
export function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
}

// UPDATE PASSWORD
export function changePassword(newPassword) {
    return updatePassword(auth.currentUser, newPassword);
}

// RE USER
export function reAuth(credential) {
    return reauthenticateWithCredential(auth.currentUser, credential);
}

// Check User
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        console.log(currentUser);
        return unsub;
    }, [currentUser]);

    return currentUser;
}