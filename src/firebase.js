
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtzV9NcHAH_Im9w0cG1llkVyZDKebIlNw",
  authDomain: "photofolio-b8545.firebaseapp.com",
  projectId: "photofolio-b8545",
  storageBucket: "photofolio-b8545.appspot.com",
  messagingSenderId: "324804401473",
  appId: "1:324804401473:web:c0aad27d745e52ed32a9c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
