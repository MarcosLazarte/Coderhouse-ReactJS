import  firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD5j2BWdycjDGSrNsx5VlBvGHNRGDye3Cc",
  authDomain: "cazadores-de-sabores.firebaseapp.com",
  projectId: "cazadores-de-sabores",
  storageBucket: "cazadores-de-sabores.appspot.com",
  messagingSenderId: "1021767056148",
  appId: "1:1021767056148:web:295de38dc1cb0ed24ce001",
  measurementId: "G-5CFEV34HQ9"
};
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
  return app;
}
export function getFirestore(){
  return firebase.firestore(app);
}
