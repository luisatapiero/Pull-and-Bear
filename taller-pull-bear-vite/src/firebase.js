import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4NHqLViSEZmkoBMMNSmEaniCwKy4tCqE",
  authDomain: "pull-bear-web.firebaseapp.com",
  projectId: "pull-bear-web",
  storageBucket: "pull-bear-web.appspot.com",
  messagingSenderId: "440118069526",
  appId: "1:440118069526:web:9c17f20ed471c7cce9e837"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);