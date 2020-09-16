import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAtCpC8uVofexCKLfSxJ13jk25woZTjcyc",
  authDomain: "clone-269e3.firebaseapp.com",
  databaseURL: "https://clone-269e3.firebaseio.com",
  projectId: "clone-269e3",
  storageBucket: "clone-269e3.appspot.com",
  messagingSenderId: "237509810836",
  appId: "1:237509810836:web:5d82ae0ea7c1c7503cb281",
  measurementId: "G-KCJV7PJS48",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
