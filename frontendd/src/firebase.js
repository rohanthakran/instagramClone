import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB_LMpHmKSAmjJciEthDhSobgc63qCnfkg",
    authDomain: "instagramclone-960df.firebaseapp.com",
    databaseURL: "https://instagramclone-960df-default-rtdb.firebaseio.com",
    projectId: "instagramclone-960df",
    storageBucket: "instagramclone-960df.appspot.com",
    messagingSenderId: "222314551878",
    appId: "1:222314551878:web:f02194f77ce6502a240847",
    measurementId: "G-TFE0PC43E4"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage}