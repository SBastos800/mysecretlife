import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB_qkDYwpkweC3Yx0WR3gImMvLUKN3c8m4",
    authDomain: "mysecretlife-ac5bf.firebaseapp.com",
    databaseURL: "https://mysecretlife-ac5bf.firebaseio.com",
    projectId: "mysecretlife-ac5bf",
    storageBucket: "mysecretlife-ac5bf.appspot.com",
    messagingSenderId: "450778602832",
    appId: "1:450778602832:web:91fc3ad4b97299b3782055"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const providers = {
    google: new firebase.auth.GoogleAuthProvider()
}

export const firestore = firebase.firestore();

export default firebase;