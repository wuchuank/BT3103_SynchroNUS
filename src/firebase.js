// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCqJdEasU5i9peInaVSjguvk3cO4uZYD4",
  authDomain: "synchronus-5906f.firebaseapp.com",
  projectId: "synchronus-5906f",
  storageBucket: "synchronus-5906f.appspot.com",
  messagingSenderId: "626768028392",
  appId: "1:626768028392:web:bf2e23b60d57f2fd7f5f5d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
firebaseApp.getCurrentUser = () => {
  return new Promise((resolve,reject) => {
    const unsubscribe = onAuthStateChanged(auth,user => {
      unsubscribe();
      resolve(user);
    }, reject);
    })
}
export {firebaseApp, auth};
