import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzhoAwgoxzXKO60Dj4apm7AHTO-ywBmwA",
  authDomain: "signature-react-firebase.firebaseapp.com",
  projectId: "signature-react-firebase",
  storageBucket: "signature-react-firebase.appspot.com",
  messagingSenderId: "40472508135",
  appId: "1:40472508135:web:cbf4efd8e66631cfa79442",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
