// Import necessary Firebase modules for app initialization, Firestore, and Storage
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";


// Set up Firebase configuration object with Firebase project details
const firebaseConfig = {
    apiKey: "AIzaSyBA2XHBPYkzGPnKLGQ9MR8mrHls22Mr1e0",
    authDomain: "mobileapp-93b03.firebaseapp.com",
    projectId: "mobileapp-93b03",
    storageBucket: "mobileapp-93b03.appspot.com",
    messagingSenderId: "871466434118",
    appId: "1:871466434118:web:fd08ca3506f5e2773e5447",
    measurementId: "G-51SFNH3FGM"
};

// Initialize Firebase application with the configuration
const app = initializeApp(firebaseConfig);
// Get a Firestore instance from the Firebase app
const db = getFirestore(app);
// Get a Firebase Storage instance from the Firebase app
const storage = getStorage(app);

// Export db and storage for use in other parts of the application
export { db, storage };
