import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: replace these with your real Firebase project values
const firebaseConfig = {
  apiKey: "AIzaSyANDnw8RIyNWt_Px_R8slLWdMirNhUIGbg",
  authDomain: "analog-carport-453713-q2.firebaseapp.com",
  databaseURL: "https://analog-carport-453713-q2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "analog-carport-453713-q2",
  storageBucket: "analog-carport-453713-q2.firebasestorage.app",
  messagingSenderId: "1095538493166",
  appId: "1:1095538493166:web:8901886f9adddab7df95ff",
  measurementId: "G-10Q18MQ5VQ"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
