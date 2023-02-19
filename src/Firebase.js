import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOJIDxJn8pXBK_k35wnHLt522eAtXpubk",
  authDomain: "study-verse-d08cc.firebaseapp.com",
  projectId: "study-verse-d08cc",
  storageBucket: "study-verse-d08cc.appspot.com",
  messagingSenderId: "803004601640",
  appId: "1:803004601640:web:679d11c1ac76274a45ec1d",
  measurementId: "G-SR2TGRD610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);