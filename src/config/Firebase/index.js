import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCL5qygzwiEEMHuc_tcj6ywwSsaDRMU4PI",
    authDomain: "my-doctor-02-7517c.firebaseapp.com",
    projectId: "my-doctor-02-7517c",
    storageBucket: "my-doctor-02-7517c.appspot.com",
    messagingSenderId: "677630007272",
    appId: "1:677630007272:web:893546ead4e36d140bf65d"
  });
} else {
  firebase.app()
}

const Fire = firebase;

export default Fire;

// import * as firebase from "firebase";

// const config = {
//     apiKey: "AIzaSyAFXsDWOl6fu9Q260S7VvSJ-7U8pJCHoRI",
//     authDomain: "my-doctor-01-de219.firebaseapp.com",
//     projectId: "my-doctor-01-de219",
//     storageBucket: "my-doctor-01-de219.appspot.com",
//     messagingSenderId: "248691407999",
//     appId: "1:248691407999:web:c2340f614cc843eda5134a",
// };

// export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();