import "firebase"
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "parishram-001.firebaseapp.com",
  databaseURL: "https://parishram-001.firebaseio.com",
  projectId: "parishram-001",
  storageBucket: "parishram-001.appspot.com",
  messagingSenderId: "285871258996",
  appId: "1:285871258996:web:e11a17180d0099704b8021",
  measurementId: "G-YGTK2RFZMG"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


//Initialize firestore
export const firestore = firebase.firestore();

export const firebaseStorage = firebase.storage ?   firebase.storage() : null;



export default firebase;