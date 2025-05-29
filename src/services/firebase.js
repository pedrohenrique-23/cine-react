import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANzJO-C9FurwZSK01_cBxFQX7Wn_r30qQ",
  authDomain: "cinereact-28195.firebaseapp.com",
  projectId: "cinereact-28195",
  storageBucket: "cinereact-28195.appspot.com",
  messagingSenderId: "990093926647",
  appId: "1:990093926647:web:ec8bbf854d3b0fcff8b3f2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
