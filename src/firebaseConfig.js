import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwpdL5jAxVRc7zedX4P6_DE4STI8585Oo",
  authDomain: "cod-tienda-react.firebaseapp.com",
  projectId: "cod-tienda-react",
  storageBucket: "cod-tienda-react.appspot.com",
  messagingSenderId: "849302065521",
  appId: "1:849302065521:web:8873bb344882af5704e6d0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);