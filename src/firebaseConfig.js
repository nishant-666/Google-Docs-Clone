
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  //Your config data
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)