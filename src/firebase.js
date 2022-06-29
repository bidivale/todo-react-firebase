//Old firebase
//import firebase from 'firebase'
//New imports from 'firebase/app' Bidisha
import { initializeApp } from 'firebase/app';
//New import from 'firebase/firestore' Bidisha
import { getFirestore, collection, getDocs, addDoc, query, serverTimestamp, orderBy, deleteDoc,doc, onSnapshot } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCyhaWPbHPhAIOVaOAozYF5Ml5HT-JeetE",
  authDomain: "todo-react-firebase-26649.firebaseapp.com",
  projectId: "todo-react-firebase-26649",
  storageBucket: "todo-react-firebase-26649.appspot.com",
  messagingSenderId: "301828800312",
  appId: "1:301828800312:web:03c90833d665378802cbcd"
};

  //Old firebase code
  //const firebaseApp = firebase.initializeApp(firebaseConfig)
  // Old firebase code
  //const db = firebaseApp.firestore()

  //init firebase app - Bidisha
  const firebaseApp = initializeApp(firebaseConfig);

  //init firestore service Bidisha
  export const db = getFirestore();

  // collection ref Bidisha
  export const colRef = collection(db,'todos')

  
  // New firebase export Bidisha
  export { getDocs, addDoc, serverTimestamp, query, orderBy, deleteDoc, doc, onSnapshot}

  //We will fetch data from colllection by getDocs() Bidisha

  

  