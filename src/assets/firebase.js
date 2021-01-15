import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBLWtqkNeJUtefV-jJM6sNMvW_2L6GILT8",
  authDomain: "english-memory.firebaseapp.com",
  databaseURL:
    "https://english-memory-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "english-memory",
  storageBucket: "english-memory.appspot.com",
  messagingSenderId: "377126105924",
  appId: "1:377126105924:web:58fe9f8a1782320da49d11",
};

firebase.initializeApp(firebaseConfig);
