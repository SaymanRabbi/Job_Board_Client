import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyATiCXL85UxFathe0HmhOpegzP7rTI9los",
  authDomain: "job-box-15b9e.firebaseapp.com",
  projectId: "job-box-15b9e",
  storageBucket: "job-box-15b9e.appspot.com",
  messagingSenderId: "542707116484",
  appId: "1:542707116484:web:a5430e1806bc4f0fec5c91"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
