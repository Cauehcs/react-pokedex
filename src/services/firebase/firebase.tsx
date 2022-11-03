import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "firebase/database";
import { Database, getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDZXNtFQ7sVVYB8OOKrJQ4Yme20rtWD1r8",
  authDomain: "pokedex-ip2.firebaseapp.com",
  databaseURL: "https://pokedex-ip2-default-rtdb.firebaseio.com",
  projectId: "pokedex-ip2",
  storageBucket: "pokedex-ip2.appspot.com",
  messagingSenderId: "26175927578",
  appId: "1:26175927578:web:02bb35ba3ee6c7c57528a3",
  measurementId: "G-8QY559MYD3",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
