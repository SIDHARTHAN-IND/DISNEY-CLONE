import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyC10-H9ZaJZ74neubIdNHfFvb4mlz5lWro",
  authDomain: "disney-clone-b8673.firebaseapp.com",
  projectId: "disney-clone-b8673",
  storageBucket: "disney-clone-b8673.appspot.com",
  messagingSenderId: "782729372592",
  appId: "1:782729372592:web:78e64cc7b0789e442fac75",
  measurementId: "G-ZRQE3P85XS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;