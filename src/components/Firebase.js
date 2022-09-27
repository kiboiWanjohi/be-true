// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/storage";

// import initializeApp from "firebase/compat/app";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA_1az79rbopf_JJrWZ-dm-KNwTFpT1G3Q",
//   authDomain: "beorganic-58413.firebaseapp.com",
//   projectId: "beorganic-58413",
//   storageBucket: "beorganic-58413.appspot.com",
//   messagingSenderId: "955680926322",
//   appId: "1:955680926322:web:3672dcf2b3f71ab464b0eb",
//   measurementId: "G-YCTCY56FX5",
// };
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA_1az79rbopf_JJrWZ-dm-KNwTFpT1G3Q",
  authDomain: "beorganic-58413.firebaseapp.com",
  projectId: "beorganic-58413",
  storageBucket: "beorganic-58413.appspot.com",
  messagingSenderId: "955680926322",
  appId: "1:955680926322:web:3672dcf2b3f71ab464b0eb",
  measurementId: "G-YCTCY56FX5",
});

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();
const db = firebaseApp.firestore();

//const analytics = getAnalytics(app);
//export { db, auth, storage, app };
export { db, storage, auth };
