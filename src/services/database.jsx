// A dump of the db was created and stored in json format under database.json

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "montessori-planet.firebasestorage.app",
  messagingSenderId: "578788110952",
  appId: "1:578788110952:web:47ef7a3df16e7a44cf01dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getToys = async () => {
  const toysCollection = collection(db, "toys");
  const toysSnapshot = await getDocs(toysCollection);
  const toysList = toysSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return toysList;
};

export const getToyById = async (id) => {
  const docRef = doc(db, "toys", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    throw new Error(`Could not find the product with id ${id}`);
  }
  const toyDetails = {
    id: snapshot.id,
    ...snapshot.data(),
  };
  return toyDetails;
};
