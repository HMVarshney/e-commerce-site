import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBEQZnmIhBJOjfpiYBHAs4R1axyDEV_JD0",
    authDomain: "ecommerce001.firebaseapp.com",
    databaseURL: "https://ecommerce001.firebaseio.com",
    projectId: "ecommerce001",
    storageBucket: "ecommerce001.appspot.com",
    messagingSenderId: "1070129020686",
    appId: "1:1070129020686:web:c5c2c029a6474a4e60615f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();