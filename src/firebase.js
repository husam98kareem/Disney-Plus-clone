import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyC97vL4y74IPHBMDmApKDfJHE8kHuosHsM",
    authDomain: "disneyplus-clone-b90eb.firebaseapp.com",
    projectId: "disneyplus-clone-b90eb",
    storageBucket: "disneyplus-clone-b90eb.appspot.com",
    messagingSenderId: "111370383380",
    appId: "1:111370383380:web:9e61b84088e01e19607701",
    measurementId: "G-MHT0V4X0G6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage;

export { auth, provider, storage };
export default db;