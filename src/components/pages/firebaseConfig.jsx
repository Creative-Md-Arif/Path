// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoRi7BAQHHaLWdn6wUV9QO4_8pCMTUDm4",
  authDomain: "todo-168be.firebaseapp.com",
  projectId: "todo-168be",
  storageBucket: "todo-168be.appspot.com",
  messagingSenderId: "922185495246",
  appId: "1:922185495246:web:a47330c34beb9aa41c569f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;
